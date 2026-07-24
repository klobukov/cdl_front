import React from 'react'
import Page from './functions/PageClassConstructor.js'
import {Link, useLocation} from 'react-router-dom'
import '../../Styles/page404.css'
import logo from '../../images/logo.jpg'


const name = "Page404"
const url = "*"
const element =  function Page404() {
	const location = useLocation()
	const url = location.pathname

	return(
		<div className="page404">
			<Link to="/"><img src={logo} title="logo" alt="logo"/></Link>
			<h1>По адресу <i>"{url}"</i> ничего не найдено. Попробуйте начать с главной страницы</h1>
			<Link to="/">Главная страница</Link>
		</div>
	)
}

export default new Page(name, url, element)