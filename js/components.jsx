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
					Tytuł: {this.props.title}
					<br />
				Tytuł oryginalny: {this.props.originalTitle}
			</header>
				<main>Opis: {this.props.overview}</main>
				<footer>Data premiery: {this.props.date}</footer>
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
					Strona internetowa: {this.props.homepage}
				</header>
				<main>Wytwórnie: {this.props.companies}</main>
				<footer>Opis 2: {this.props.overview}</footer>
			</div>
		)
	}
}


export {MovieBasicInfo};
export {MovieAdditionalInfo};
