import React, { Component } from 'react';
import Overview from './components/Overview';
import './App.css';
import uniqid from 'uniqid';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: { 
        text: '',
        listNumber: 1,
        id: uniqid()
      },
      tasks: [],
    };

    
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
        listNumber: this.state.task.listNumber,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        listNumber: this.state.task.listNumber + 1,
        id: uniqid()
      },
    }) 
  }

  deleteItem = (e) => {
    console.log('hi');
  }
  
  render() {

    const { task, tasks, deleteItem } = this.state;

    return (
      <div className="App">
        <div className='inputForm'>
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
        </div>
        <Overview tasks={tasks} deleteItem={deleteItem}/>
      </div>
    );
  }
}

export default App;
