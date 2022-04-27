import React from 'react';
import { mainOffice, mk1 } from '../Offices/allOffices.js';
import ReactSwipe from 'react-swipe';

import '../Styles/header.css';
import logo from '../images/logo.jpg';
import photo1 from '../images/2.jpg';
import photo2 from '../images/3.jpg';
import photo3 from '../images/4.jpg';
import photo4 from '../images/6.jpg';
import photo5 from '../images/7.jpg';
import covidFull from '../images/covid-full.jpg'


export default class Header extends React.Component{

	render(){
		// todo: сделать программно вывод инфо о всех офисах, как с картами
		return(
			<header className="header">
				<div className="header__info">
					<div>
						<img src={logo} alt="Логотип" title="Логотип"/>
					</div>
					<div>
						<p>
						   299008, Севастополь,<br/>
						   Время работы:<br/>
						   {mainOffice.workDays}<br/><br/>
						   <span>{mainOffice.address}</span><br/>
						   Забор биоматериала: {mainOffice.samplingBioMaterialTime}<br/>
						   Выдача результатов: {mainOffice.resultsTime}<br/>
						   Тел.: {mainOffice.phone}<br/>
						   email: {mainOffice.email}<br/><br/>
						   <span>{mk1.address}</span><br/>
						   Забор биоматериала: {mk1.samplingBioMaterialTime}<br/>
						   Выдача результатов: {mk1.resultsTime}<br/>
						   Тел.: {mk1.phone}<br/><br/>
						</p>
					</div>
				</div>
				<div className="header__slideShow">
					<Carousel />
				</div>
				<div style={{"border": "5px solid blue", "padding": "10px", "margin-bottom": "10px"}}>
					<div style={{"font-size": "20px", "text-align": "center", "margin-bottom": "10px"}}>
						Поздравляем вас с наступающими майскими праздниками!
						Пусть эти праздничные дни принесут в ваш дом мир, солнце, радость, хорошее настроение и светлые надежды!
					</div>
					<div style={{"font-size": "20px", "text-align": "center"}}>
						График работы Медицинского центра «Зеленая Волна» ООО «Регион-Стандарт» на майские, праздничные дни:<br/> 
						<span style={{"font-weight": "bold"}}> 1, 2, 3, 7, 8, 9, 10 мая -  выходные дни. 4, 5, 6  мая –  рабочие дни.</span>
					</div>
				</div>
				<div className="header__covid_container">
					<img src={covidFull} alt="Covid" />
				</div>
			</header>
		)
	}
}

function Carousel(){
	return(
		<ReactSwipe className="carousel" swipeOptions={{continuous: true, auto: 5000, speed: 700} }>
            <div><img src={photo1} alt=""/></div>
            <div><img src={photo2} alt=""/></div>
            <div><img src={photo3} alt=""/></div>
            <div><img src={photo4} alt=""/></div>
            <div><img src={photo5} alt=""/></div>
        </ReactSwipe>
	)
}
