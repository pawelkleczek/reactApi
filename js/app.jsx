import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import {Navi} from './navi.jsx';
import {Main} from './main.jsx';
import {Tmdb} from './tmdb.jsx';
import {MoviesTable} from './movies.jsx';
import {Contact} from './contact.jsx';


class App extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Navi}>
					<IndexRoute component={Main} />
					<Route path='/search' component={Tmdb} />
					<Route path='/movies' component={MoviesTable} />
					<Route path='/contact' component={Contact} />
				</Route>
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
