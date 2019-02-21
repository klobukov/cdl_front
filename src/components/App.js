import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Pages objects
import Contacts from './Pages/Contacts.js';
import Price from './Pages/Price.js';
import Page404 from './Pages/Page404.js'


export default class App extends React.Component {
	render(){
		return(
			<Router>
				<Switch>
	    			<Route exact path="/" component={Price.output} />
	    			<Route exact path={Contacts.url} component={Contacts.output} />
	    			<Route exact path={Price.url} component={Price.output} />
	    			<Route exact path={Page404.url} component={Page404.output} />
			   </Switch>
			</Router>
		)
	}
}

