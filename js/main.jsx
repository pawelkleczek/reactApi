import React from 'react';
import {Quote, Buttons, Search} from './components.jsx';

class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectValue: 5,
			inputValue: '',
			activePage: 1,
			disablePrev: true,
			disableNext: true,
			maxPageNumbers: 1,
			quotes: [],
			pages: [],
			buttons: []
		}
	}

	fetch = () => {
		fetch(`https://api.tronalddump.io/search/quote?query=${this.state.inputValue}&page=${this.state.activePage}&size=${this.state.selectValue}`).
		then(resp => {
			if(resp.ok) {
				return resp.json();
			} else {
				alert('Error, status: ' + resp.status +', message: ' + resp.message);
			}
		}).
		then((json) => {
			if(json.total == 0) {
				alert('No matches found, try different topic...');
			} else {
				this.setState({
					maxPageNumbers: Math.ceil(json.total/this.state.selectValue)
				}, () => this.keepAnEyeOnAPage());

				return json._embedded.quotes.map(e => {
					return {
						value: e.value,
						date: (new Date(Date.parse(e.appeared_at))).toDateString(),
						url: e._embedded.source[0].url,
						tag: e.tags[0]
					}
				});
			}
		}).
		then(e => {
			return e.map((e, i) => {
				return <Quote quote={e.value} date={e.date} url={e.url} tag={e.tag} key={i}/>;
			});
		}).
		then(e => {

			this.setState({
				quotes: e
			}, () => this.addButtons());
		}).catch(err => console.log(err));
	}

	pageClick = (event) => {
		event.preventDefault();
		this.setState({
			activePage: parseInt(event.target.id),
		}, () => this.fetch());

	}

	keepAnEyeOnAPage = () => {

		if (this.state.activePage != 1 && this.state.activePage != this.state.maxPageNumbers) {

			this.setState({
				disableNext: false,
				disablePrev: false
			});
		} else if (this.state.activePage == 1 && this.state.maxPageNumbers > this.state.activePage) {

			this.setState({
				disableNext: false,
				disablePrev: true
			});
		}
		else if (this.state.activePage == 1 && this.state.maxPageNumbers == this.state.activePage) {

			this.setState({
				disableNext: true,
				disablePrev: true
			});
		} else if (this.state.activePage == this.state.maxPageNumbers && this.state.maxPageNumbers > 1) {

			this.setState({
				disableNext: true,
				disablePrev: false
			});
		}
	}

	makePageNumbers = () => {
		let pages = []
		if (this.state.maxPageNumbers > 1) {
			for(let i = 1; i <= this.state.maxPageNumbers; i++) {
				if (this.state.activePage == i) {
					pages.push(<a href='#' className='pages active' onClick={this.pageClick} id={i} key={i}> {i} </a>);
				} else {
					pages.push(<a href='#' className='pages' onClick={this.pageClick} id={i} key={i}> {i} </a>);
				}
			}
			this.setState({
				pages: pages
			});
		}
	}

	handleInputChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	}

	handleSelectChange = (event) => {
		this.setState({
			selectValue: parseInt(event.target.value)
		});
	}

	handlePrevClick = (event) => {
		event.preventDefault();
			this.setState({
				activePage: this.state.activePage-1
			}, () => this.fetch());
	}

	handleNextClick = (event) => {
		event.preventDefault();
			this.setState({
				activePage: this.state.activePage+1
			}, () => this.fetch());

	}

	addButtons = () => {
		if (this.state.maxPageNumbers > 1) {
			this.setState({
				buttons: <Buttons next={this.handleNextClick} prev={this.handlePrevClick} key='buttons' disablePrev={this.state.disablePrev} disableNext={this.state.disableNext}/>
		}, () => this.makePageNumbers());
		}
	}

	handleSearchClick = (event) => {
		event.preventDefault();
		this.setState({
			inputValue: event.target.firstElementChild.firstElementChild.value,
			selectValue: parseInt(event.target.lastElementChild.value),
			activePage: 1,
			disablePrev: true,
			disableNext: true,
			maxPageNumbers: 1,
			quotes: [],
			pages: [],
			buttons: []
		}, () => this.fetch());
	}

	render() {
		return (
			<div>
				<Search submit={this.handleSearchClick} input={this.state.inputValue} select={this.state.selectValue} inputChange={this.handleInputChange} selectChange={this.handleSelectChange} />
				{this.state.activePage}
				<div>
				{this.state.quotes}
				{this.state.buttons}
				</div>
				<div>
				{this.state.pages}
				</div>
			</div>
		)
	}
}

export {Main};
