import React, {Component} from 'react';
import './App.css';

import {connect, sendMsg} from "./api";

class App extends Component {
  
  constructor(props){
    super(props);
    connect();
  }

  send() {
    let msg  = "hello";
    console.log(msg);
    sendMsg(msg);
  }

  render() {
    return (
    <div classname="App">
      <button onClick={this.send}>Hit</button>
    </div>

    );
  }
}

export default App;
