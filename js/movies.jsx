import React from 'react';
import ReactDOM from 'react-dom';
import ReactTable from 'react-table';

const columns = [{
  Header: 'Movies',
  columns: [{
    Header: 'Title',
	id: 'title',
    accessor: d => d.title
  }, {
    Header: 'Director',
    id: 'director',
    accessor: d => d.director
  }]
}, {
  Header: 'Info',
  columns: [{
    Header: 'Release date',
    accessor: 'release_date'
  }]
}];

const moviesEmpty = [{title: '', director: '', release_date: ''}];

class MoviesTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: null
		}
	}

	handleClick = () => {

		const cachedMovies = localStorage.getItem('movies');

		if (cachedMovies) {
      		this.setState({ movies: JSON.parse(cachedMovies) });
      		return;
    	}

		fetch('https://ghibliapi.herokuapp.com/films').
			then(resp => resp.json()).
			then(movies => {
				console.log('fetch!');
				return movies.map(movie => {
					return {
						title: movie.title,
						director: movie.director,
						release_date: movie.release_date
					}
				});
			}).
			then(movies => {
				localStorage.setItem('movies', JSON.stringify(movies));
				this.setState({
					movies: movies
				});
			}).
			catch(err => alert(err));
	}

	render() {
		return (
			<div>
				<h1>All Studio Ghibli Anime Movies</h1>

				<button onClick={this.handleClick}>Szukaj filmów</button>


				{ this.state.movies ? <ReactTable
					data={this.state.movies}
					columns={columns}
					filterable={true}
				/> : <ReactTable data={moviesEmpty}
					columns={columns}
					filterable={true}
				/>}

			</div>
	)
	}
}

export {MoviesTable};
