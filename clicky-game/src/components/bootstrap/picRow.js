import React, {Component} from 'react';

class PicRow extends Component {
	state = {
		arrPos: [0,1,2,3,4,5,6,7,8,9,10,11]
	}
	randomize = () => {
		let arr = this.state.arrPos;
		console.log("randomizer running");
		let i = 0
		  , j = 0
		  , temp = null
		for (i = arr.length - 1; i > 0; i -= 1) {
		  j = Math.floor(Math.random() * (i + 1))
		  temp = arr[i]
		  arr[i] = arr[j]
		  arr[j] = temp
		}
		this.setState({arrPos: arr})
	}
	render (props) {
		const links=this.props.links;
		const arrPos=this.state.arrPos;
		return (
			<div>
			<div className="row">
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[0]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[1]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[2]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[3]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			</div>
			<hr></hr>
			<div className="row">
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[4]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[5]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[6]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[7]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			</div>
			<hr></hr>
			<div className="row">
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[8]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[9]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[10]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			  <div className="col-3" onClick={this.randomize}>
			    <img src={links[arrPos[11]]} className="img-fluid" alt="Responsive image"></img>
			  </div>
			</div>
			</div>
		)
	}
}

export default PicRow;