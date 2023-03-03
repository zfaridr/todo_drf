import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import ToDoList from './components/todo.js'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'todo': [],
      'user': []
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
    axios.get('http://127.0.0.1:8000/api/todo/')
      .then(response => {
        const todo = response.data
          this.setState(
          {
            'todo': todo,
          }
        )
      }).catch(error => console.log(error))
  }
  
  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/todo/')
      .then(response => {
        const todo = response.data
          this.setState(
          {
            'todo': todo,
          }
        )
      }).catch(error => console.log(error))
    axios.get('http://127.0.0.1:8000/api/user/')
      .then(response => {
        const user = response.data
          this.setState(
          {
            'user': user,
          }
        )
      }).catch(error => console.log(error))
  }


  render() {
    return (
      <div class='Wrapper'>
        <div class='MainMenu'>
          <div>
            <ToDoList ToDo={this.state.todo} />
          </div>
          <div>
            <UserList User={this.state.user} />
          </div>
        </div>
      
        <div class='MainFooter'>
          <p>
            Info on main page of the todo_rest
          </p>
        </div>
      </div>
    )
  }
}

export default App;


    