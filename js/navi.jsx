import React from 'react';
import Menu, { SubMenu, Item } from 'rc-menu';
import { IndexLink } from 'react-router';


class Navi extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Menu mode='horizontal' className='nav-bar'>
					<Item key="1"><IndexLink to='/'>Main</IndexLink></Item>
					<Item key="2"><IndexLink to='/movies'>Movies</IndexLink></Item>
					<Item key="3"><IndexLink to='/tronald'>Tronald</IndexLink></Item>
					<Item key="4"><IndexLink to='/contact'>Contact</IndexLink></Item>
				</Menu>
				{this.props.children}
			</div>
		)
	}
}

export {Navi};
