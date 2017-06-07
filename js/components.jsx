import React from 'react';

class Quote extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<blockquote>
				<p>{this.props.quote}</p>
				<footer>
					- <cite><a href={this.props.url} target='_blank'>{this.props.date}</a></cite>
				</footer>
			</blockquote>
		)
	}
}

class Buttons extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<button id='prev' onClick={this.props.prev} disabled={this.props.disablePrev}>Prev</button>
				<button id='next' onClick={this.props.next} disabled={this.props.disableNext}>Next</button>
			</div>
		)
	}
}

class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form onSubmit={this.props.submit}>
				<label>
					<input type='text' value={this.props.input} onChange={this.props.inputChange} />
				</label>
				<input type="submit" value="Dump" />
				<select value={this.props.select} onChange={this.props.selectChange}>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={15}>15</option>
				</select>
			</form>
		)
	}
}

export {Quote};
export {Buttons};
export {Search};
