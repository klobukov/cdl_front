import React, {Fragment} from 'react';

import '../Styles/arrowUp.css';

export default class ArrowUp extends React.PureComponent{
	state = {
		show: false
	}

	componentDidMount(){
		window.addEventListener('scroll', this.arrow);
	}

	componentWillUnmount(){
		window.removeEventListener('scroll', this.arrow);
	}

	arrow = () => {
		const show = window.pageYOffset > 500;
		this.setState({show: show});
	}
	
	toTop(){
		window.scrollTo(0,0);
	}

	render(){
		return(
			<Fragment>
				{this.state.show ? <div className="arrowUp" onClick={this.toTop}></div> : null}
			</Fragment>
		)
	}
}