import React, { Component } from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <Overview />
      </div>
    );
  }
}

export default App;
