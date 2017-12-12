import React, { Component } from 'react';
import PageHeader from '../bootstrap/header.js';
import PageFooter from '../bootstrap/footer.js';
import PageContainer from '../bootstrap/container.js';
import PicRow from '../bootstrap/picRow.js';
import './App.css';
import picLinks from '../../picLinks.json';
let clickedPics = [];
let val = 0;

class App extends Component {
  state = {
    arrPos: [0,1,2,3,4,5,6,7,8,9,10,11],
    score: val
  }
  compare = (id) => {
    if (clickedPics.indexOf(id) === -1){
      val++;
      clickedPics.push(id);
      this.setState ({score: val});
    }
    else{
      val=0;
      clickedPics = [];
      this.setState({score: val});
    }
    console.log(this.state.score);
  }
  randomize = (id) => {
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
    this.compare(id);
  }
  render() {
    //console.log(picLinks.links[0])
    return (
      <div className="App">
        <PageHeader score={this.state.score}/>
        <PageContainer>
          <PicRow links={picLinks.links} arrPos={this.state.arrPos} randomize={this.randomize} compare={this.compare}/>
        </PageContainer>
        <PageFooter/>
      </div>
    );
  }
}

export default App;
