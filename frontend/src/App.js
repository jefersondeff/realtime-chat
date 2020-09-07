import React, {Component} from 'react';
import './App.css';

import {connect, sendMsg} from "./api";
import Header from "./components/Header"

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
      <Header />
      <button onClick={this.send}>Hit</button>
    </div>

    );
  }
}

export default App;
