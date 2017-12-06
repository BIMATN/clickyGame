import React, { Component } from 'react';
import logo from '../../logo.svg';

class PageHeader extends Component {
	render(){
		return(
			<div>
				<header className="App-header">
				  <img src={logo} className="App-logo" alt="logo" />
				  <h1 className="App-title">Welcome to Clicky Game!</h1>
				</header>
				<p className="App-intro">
				  To get started, click a picture!
				</p>
			</div>
		);
	}
}

export default PageHeader;