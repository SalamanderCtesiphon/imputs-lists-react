import React, { Component } from 'react';
import Overview from './components/Overview';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { text: ''},
      tasks: [],
    };

    
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    })
    
  }
  
  render() {

    const { task } = this.state;

    return (
      <div className="App">
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter A Task: </label>
          <input 
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview />
      </div>
    );
  }
}

export default App;
