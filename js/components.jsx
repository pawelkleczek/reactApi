import React from 'react';

const posterBase = `https://image.tmdb.org/t/p/`;
const posterSize = `original/`;

class MovieBasicInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<header>
					{this.props.title}
				{this.props.originalTitle}
			</header>
				<main>{this.props.overview}</main>
				<footer>{this.props.date}</footer>
			</div>
		)
	}
}

class MovieAdditionalInfo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<header>
					{this.props.title}
				</header>
				<main>{this.props.overview}</main>
				<footer>{this.props.date}</footer>
			</div>
		)
	}
}


export {MovieBasicInfo};
export {MovieAdditionalInfo};
