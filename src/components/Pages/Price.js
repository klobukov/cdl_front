import React, {Fragment} from 'react';
import Page from './functions/PageClassConstructor.js';

import Header from '../Header.js';
import Navigation from '../Navigation.js';
import Footer from '../Footer.js';
import ArrowUp from '../ArrowUp.js';
import Search from '../Search.js';
import AnalysisSubdivisionsGroup from '../AnalysisSubdivisionsGroup.js';

const name = "Анализы и цены";
const url = "/price";
const output = function Price(){
	return(
		<Fragment>
			<Header/>
			<Navigation active={name}/>
			<main>
				<Search/>
				<AnalysisSubdivisionsGroup/>
			</main>
			<Footer/>
			<ArrowUp/>
		</Fragment>
	)
}

export default new Page(name, url, output);