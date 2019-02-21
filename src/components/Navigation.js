import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/navigation.css';
//needed pages
import Price from './Pages/Price.js';
import Contacts from './Pages/Contacts.js';


export default function Navigation(props){
	const baseClassName = 'navigation__tab';
	const activeClassName = baseClassName + ' navigation__active';
	const pagesArr = [Price, Contacts];

	function getLinks(arr){
		return arr.map((item, index) => {
			return(
				<Link 
					key={index}
					to={item.url}
					className={props.active === item.name ? activeClassName : baseClassName}>
					{item.name}
				</Link>
			)
		})
	}

	return(
		<nav className="navigation">
			{getLinks(pagesArr)}
		</nav>
	)
}
