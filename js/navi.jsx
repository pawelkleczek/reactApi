import React from 'react';
import Menu, { SubMenu, Item } from 'rc-menu';
import { Link } from 'react-router';


class Navi extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Menu mode='horizontal' className='nav-bar'>
				<Item key="1"><Link to='/'>Main</Link></Item>
				<Item key="2"><Link to='/movies'>Movies</Link></Item>
				<Item key="3"><Link to='/tronald'>Tronald</Link></Item>
			</Menu>
		)
	}
}

export {Navi};
