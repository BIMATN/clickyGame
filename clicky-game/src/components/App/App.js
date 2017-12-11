import React, { Component } from 'react';
import PageHeader from '../bootstrap/header.js';
import PageFooter from '../bootstrap/footer.js';
import PageContainer from '../bootstrap/container.js';
import './App.css';
import picLinks from '../../picLinks.json';

class App extends Component {
  render() {
    //console.log(picLinks.links[0])
    return (
      <div className="App">
        <PageHeader/>
        <PageContainer links={picLinks.links}/>
        <PageFooter/>
      </div>
    );
  }
}

export default App;
