import React from 'react';
import Menu, { SubMenu, Item } from 'rc-menu';
import { IndexLink } from 'react-router';


class Navi extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='container'>
				<Menu mode='horizontal' className='nav-bar'>
					<Item key="1"><IndexLink className='navi-link' to='/'>Main</IndexLink></Item>
					<Item key="2"><IndexLink className='navi-link' to='/movies'>Movies</IndexLink></Item>
					<Item key="3"><IndexLink className='navi-link' to='/search'>Search</IndexLink></Item>
					<Item key="4"><IndexLink className='navi-link' to='/contact'>Contact</IndexLink></Item>
				</Menu>
				{this.props.children}
			</div>
		)
	}
}

export {Navi};
