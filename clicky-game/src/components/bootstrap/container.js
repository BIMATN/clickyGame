import React, {Component} from 'react';

class PageContainer extends Component {
  render(props){
    return(
      <div className="container">
      	{this.props.children}
      </div>
    );
  }
}

export default PageContainer;