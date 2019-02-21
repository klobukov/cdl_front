import React, {Fragment} from 'react';
import Page from './functions/PageClassConstructor.js';

import Header from '../Header.js';
import Navigation from '../Navigation.js';
import AllOfficesInfo from '../AllOfficesInfo.js';
import Footer from '../Footer.js';
import ArrowUp from '../ArrowUp.js';

const name = "Контакты";
const url = "/contacts";
const output = function Contacts(){
	return(
		<Fragment>
			<Header/>
			<Navigation active={name}/>
			<main>
				<AllOfficesInfo/>
			</main>
			<Footer/>
			<ArrowUp/>
		</Fragment>
	)
}

export default new Page(name, url, output);
