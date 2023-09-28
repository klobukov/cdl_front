import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Contacts from './Pages/Contacts.js'
import Price from './Pages/Price.js'
import Page404 from './Pages/Page404.js'
import Politics from "./Pages/Politics"

export default class App extends React.Component {
	render(){
		return(
			<Router>
				<Switch>
	    			<Route exact path="/" component={Price.output} />
	    			<Route exact path={Contacts.url} component={Contacts.output} />
	    			<Route exact path={Price.url} component={Price.output} />
						<Route exact path={Politics.url} component={Politics.output} />
	    			<Route exact path={Page404.url} component={Page404.output} />
			   </Switch>
			</Router>
		)
	}
}

