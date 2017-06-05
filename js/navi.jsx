import React from 'react';
import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
import animate from 'css-animation';

class Navi extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Menu mode='horizontal' className='nav-bar' openAnimation='slide-up'>
				<SubMenu title={<span>sub menu</span>} key="1">
					<MenuItem key="1-1">0-1</MenuItem>
					<Divider />
					<MenuItem key="1-2">0-2</MenuItem>
				</SubMenu>
				<MenuItem key="2">1</MenuItem>
				<MenuItem key="3">outer</MenuItem>
				<MenuItem disabled>disabled</MenuItem>
				<MenuItem key="5">outer3</MenuItem>
			</Menu>
		)
	}
}

export {Navi};
