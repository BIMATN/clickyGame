import React, {Component} from 'react';

class PageContainer extends Component {
  render(props){
    return(
      <div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src={this.props.links[0]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[1]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[2]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[3]} className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-3">
            <img src={this.props.links[4]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[5]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[6]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[7]} className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
        <hr></hr>
        <div className="row">
          <div className="col-3">
            <img src={this.props.links[8]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[9]}className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[10]} className="img-fluid" alt="Responsive image"></img>
          </div>
          <div className="col-3">
            <img src={this.props.links[11]} className="img-fluid" alt="Responsive image"></img>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default PageContainer;