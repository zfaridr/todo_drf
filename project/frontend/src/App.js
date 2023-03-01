import React from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoList from './components/todo.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'todo': []
    }
  }

  // componentDidMount() {
  //   const todo = [
  //     {
  //       'name': 'write a letter',
  //       'desription': 'write a letter to the customer',
  //       'days': 2
  //     },
  //     {
  //     'name': 'read the paper',
  //     'description': 'read the paper about DRF',
  //     'days': 4
  //     },
  //   ]
  //   this.setState(
  //     {
  //     'todo': todo
  //     }
  //   )
  // }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/todo')
      .then(response => {
        const authors = response.data
          this.setState(
          {
            'todo': todo
          }
        )
      }).catch(error => console.log(error))
  }
  
  render() {
    return (
      <div>
        <ToDoList todo={this.state.todo} />
      </div>
    )
  }
}

export default App;


    