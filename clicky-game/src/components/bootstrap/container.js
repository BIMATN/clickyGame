import React, {Component} from 'react';
import PicRow from './picRow.js';

class PageContainer extends Component {
  render(props){
    return(
      <div className="container">
        <PicRow links={this.props.links} />
      </div>
    );
  }
}

export default PageContainer;