import React, { Component } from 'react';
import logo from '../../logo.svg';

class PageHeader extends Component {
	render(props){
		return(
			<div>
				<header className="App-header">
				  <img src={logo} className="App-logo" alt="logo" />
				  <ul className="nav">
				  	<li className="nav-item mx-auto">
				  		<h1 className="App-title">Welcome to My Clicky Game!</h1>
				  	</li>
				  	<li className="nav-item mx-auto">
				  		<h1 className="App-title">Score: {this.props.score}</h1>
				  	</li>
				  </ul>
				</header>
				<p className="App-intro">
				  To get started, click a picture. Then click a different picture.
				</p>
				<p className="App-intro">
				  You get a point for every new picture you click. If you click a picture you have already clicked the score resets! 
				</p>
			</div>
		);
	}
}

export default PageHeader;