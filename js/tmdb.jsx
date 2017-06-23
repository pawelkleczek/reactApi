//https://api.themoviedb.org/3/configuration?api_key=8990436c90718240a2f238e1d25d0526
//poster sizes

import React from 'react';
import {MovieBasicInfo, MovieAdditionalInfo} from './components.jsx'

const apiKey = `api_key=8990436c90718240a2f238e1d25d0526`;
const langInfo = `&language=pl-PL&region=PL`;
const movieQuery = `https://api.themoviedb.org/3/search/movie?`;
const movieSecondQuery = `https://api.themoviedb.org/3/movie/`;
const appendToSecondQuery = `&append_to_response=videos,images`;



class Tmdb extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: '',
			movie: null,
			movieMore: null
		}
	}

	fetch = () => {

		let url = `${movieQuery}${apiKey}&query=${this.state.title}${langInfo}`;

		fetch(url).
		then(resp => resp.json()).
		then(json => json.results[0]).then(movie => {

			return {
				movieId: movie.id,
				language: movie.original_language,
				title: movie.title,
				originalTitle: movie.original_title,
				overview: movie.overview,
				poster: movie.poster_path,
				date: movie.release_date,
				voteAverage: movie.vote_average,
				voteCount: movie.vote_count
			};

		}).
		then((object) => {

			this.setState({
				movie: <MovieBasicInfo title={object.title} originalTitle={object.originalTitle} overview={object.overview} date={object.date} poster={object.poster} voteAverage={object.voteAverage} voteCount={object.voteCount} language={object.language} image={object.image} />
			});

			return fetch(`${movieSecondQuery}${object.movieId}?${apiKey}${appendToSecondQuery}`)

		}).
		then(resp => resp.json()).
		then(json => {

			this.setState({
				movieMore: <MovieAdditionalInfo homepage={json.homepage} images={json.images.backdrops.map(e => e.file_path)} imdb={json.imdb_id} overview={json.overview} companies={json.production_companies.map(e => e.name)} countries={json.production_countries.map(e => e.name)} spoken={json.spoken_languages.map(e => e.name)} language={json.language} tagline={json.tagline} />
		});


		}).catch(err => alert(err));

	}

	handleChange = (event) => {
		this.setState({
			title: event.target.value
		});
	}
	handleSubmit = () => {
		event.preventDefault();
		this.fetch();
	}

	render() {
			return (
				<div>
					<form onSubmit={this.handleSubmit}>
	        			<label>
	          				Movie title:
	          				<input type="text" value={this.state.title} onChange={this.handleChange} />
	        			</label>
	        			<input type="submit" value="Submit" />
	      			</form>
					{this.state.movie && this.state.movie}
					{this.state.movieMore && this.state.movieMore}
				</div>
			)
	}
}

export {Tmdb};
