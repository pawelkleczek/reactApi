import React from 'react';
import {Quote, Buttons, Search} from './components.jsx';

class TronaldDump extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectValue: 5,
			inputValue: '',
			activePage: 1,
			disablePrev: true,
			disableNext: true,
			maxPageNumbers: 1,
			quotes: null,
			pages: null,
			buttons: null,
			tags: null
		}
	}
	componentDidMount() {
		fetch('https://api.tronalddump.io/tags').
		then(resp => resp.json()).
		then(e => {
			this.setState({
				tags: e._embedded.map((e, i) => {
					if (i % 2 == 0) {
					return <span className='tag-different'>{e}</span>;
					} else {
					return <span>{e}</span>;
					}
				})
			}, () => console.log(this.state.tags));
		}
		).catch(err => alert(err));
	}

	fetch = () => {

		let url = `https://api.tronalddump.io/search/quote
		?query=${this.state.inputValue}
		&page=${this.state.activePage}
		&size=${this.state.selectValue}`;

		if(this.state.inputValue == '') {
			alert('You have to write something');
			return;
		}


		fetch(url).
		then(resp => {

			if(resp.ok) {
				return resp.json();
			} else {
				alert('Error, status: ' + resp.status +', message: ' + resp.message);
			}

		}).
		then((json) => {

			if(json.total == 0) {

				alert('No matches found, try different value...');

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
		then(e => e.map((e, i) => <Quote quote={e.value} url={e.url} date={e.date} key={i} />))
		.then(e => this.setState({
			quotes: e
		}, () => this.addButtons()))
		.catch(err => console.log(err));

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

	addButtons = () => {
		if (this.state.maxPageNumbers > 1) {
			this.setState({
				buttons: <Buttons next={this.handleNextClick} prev={this.handlePrevClick} key='buttons' disablePrev={this.state.disablePrev} disableNext={this.state.disableNext}/>
		}, () => this.makePageNumbers());
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

	pageClick = (event) => {
		event.preventDefault();
		this.setState({
			activePage: parseInt(event.target.id),
		}, () => this.fetch());

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

	handleSearchClick = (event) => {
		event.preventDefault();
		this.setState({
			inputValue: event.target.firstElementChild.value,
			selectValue: parseInt(event.target.lastElementChild.value),
			activePage: 1,
			disablePrev: true,
			disableNext: true,
			maxPageNumbers: 1,
			quotes: null,
			pages: null,
			buttons: null
		}, () => this.fetch());
	}

	render() {
		if(this.state.quotes) {
			return (
				<div className='quotes'>
					<Search submit={this.handleSearchClick} input={this.state.inputValue} select={this.state.selectValue} inputChange={this.handleInputChange} selectChange={this.handleSelectChange} />

					{this.state.quotes}
					{this.state.buttons}
					<div className='all-pages'>
					{this.state.pages}
					</div>
				</div>
			)
		} else {
			return (
				<div className='quotes'>
					<Search submit={this.handleSearchClick} input={this.state.inputValue} select={this.state.selectValue} inputChange={this.handleInputChange} selectChange={this.handleSelectChange} />


					{this.state.tags && <p className='tags'>Możliwe wyszukania: {this.state.tags} </p>}

				</div>
			)
		}
	}
}

export {TronaldDump};
