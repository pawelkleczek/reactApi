//https://api.themoviedb.org/3/configuration?api_key=8990436c90718240a2f238e1d25d0526
//poster sizes

import React from 'react';

const apiKey = `api_key=8990436c90718240a2f238e1d25d0526`;
const lang = `&language=pl-PL&region=PL`;
const movieBase = `https://api.themoviedb.org/3/movie/search/movie?`;
const posterBase = `https://image.tmdb.org/t/p/`;
const posterSize = `original/`
const movieTitle = `&query=Totoro`

class Tmdb extends React.Component {q

	constructor(props) {
		super(props);
		this.state = {
			movieDetailsUrl: `${movieBase}${movie_id}${apiKey}&append_to_response=videos,images`
			posterUrl: `${posterBase}${poster_size}${poster_path}`,
			movieQuery: `${movieBase}${apiKey}${movieTitle}${lang}`

		}
	}

	fetch = () => {

		let url = `https://api.themoviedb.org/3/movie/157336?api_key=8990436c90718240a2f238e1d25d0526&append_to_response=videos,images`;

		fetch(url).then(resp => resp.json()).then(json => console.log(json)).catch(err => console.log(err));


	}


	render() {
		this.fetch();
			return (
				<div>
					Yeah!
				</div>
			)

	}
}

export {Tmdb};
