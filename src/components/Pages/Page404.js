import React from 'react';
import Page from './functions/PageClassConstructor.js';
import { Link } from 'react-router-dom';

import '../../Styles/page404.css';
import logo from '../../images/logo.jpg';

const name = "Page404";
const url = "*";
const output =  class Page404 extends React.Component{

	render(){
		const url = this.props.match.url;
		return(
			<div className="page404">
				<Link to="/"><img src={logo} title="logo" alt="logo"/></Link>
				<h1>По адресу <i>"{url}"</i> ничего не найдено. Попробуйте начать с главной страницы</h1>
				<Link to="/">Главная страница</Link>
			</div>
		)
	}
}

export default new Page(name, url, output);