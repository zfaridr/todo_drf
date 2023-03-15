import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/user.js'
import ToDoList from './components/todo.js'
import ProjectList from './components/project.js'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import axios from 'axios'
import LoginForm from './components/Auth.js'
import Cookies from 'universal-cookie';

const NotFound404 = ({ location }) => {
  return (
    <div>
      <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      'todo': [],
      'user': [],
      'project': [],
      'token': ''
    }
  }

  set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token}, ()=>this.load_data())
  }
  
  is_authenticated() {
    return this.state.token != ''
  }
  
  logout() {
    this.set_token('')
  }
  
  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token}, ()=>this.load_data())
  }
  
  get_token(username, password) {
    axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
    .then(response => {
      this.set_token(response.data['token'])
    }).catch(error => alert('Неверный логин или пароль'))
  }

  get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
    if (this.is_authenticated())
      {
        headers['Authorization'] = 'Token ' + this.state.token
      }
    return headers
  }

  load_data() {
    const headers = this.get_headers()
    axios.get('http://127.0.0.1:8000/api/user/', {headers})
      .then(response => {
        this.setState({user: response.data})
      }).catch(error => 
        console.log(error))
    
    axios.get('http://127.0.0.1:8000/api/todo/', {headers})
      .then(response => {
        this.setState({todo: response.data})
      }).catch(error => {
        console.log(error)
        this.setState({todo: []})
      })
    
    axios.get('http://127.0.0.1:8000/api/project/', {headers})
      .then(response => {
        this.setState({project: response.data})
      }).catch(error => {
        console.log(error)
        this.setState({project: []})
      })
  }

  componentDidMount() {
    this.get_token_from_storage()
  }

  get_token(username, password) {
      axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
      .then(response => {
        console.log(response.data)
      }).catch(error => alert('Неверный логин или пароль'))
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

  // componentDidMount() {
  //   axios.get('http://127.0.0.1:8000/api/todo/')
  //     .then(response => {
  //       const todo = response.data
  //         this.setState(
  //         {
  //           'todo': todo,
  //         }
  //       )
  //     }).catch(error => console.log(error))
  // }
  
  // componentDidMount() {
  //   axios.get('http://127.0.0.1:8000/api/todo/')
  //     .then(response => {
  //       const todo = response.data
  //         this.setState(
  //         {
  //           'todo': todo,
  //         }
  //       )
  //     }).catch(error => console.log(error))
  //   axios.get('http://127.0.0.1:8000/api/user/')
  //     .then(response => {
  //       const user = response.data
  //         this.setState(
  //         {
  //           'user': user,
  //         }
  //       )
  //     }).catch(error => console.log(error))
  //   axios.get('http://127.0.0.1:8000/api/project/')
  //     .then(response => {
  //       const project = response.data
  //         this.setState(
  //         {
  //           'project': project,
  //         }
  //       )
  //     }).catch(error => console.log(error))
  // }


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <nav>
            <ul>
              <li>
                <Link to='/'>Projects</Link>
              </li>
              <li>
                <Link to='/todo/'>ToDo</Link>
              </li>
              <li>
                <Link to='/user/'>Users</Link>
              </li>
            </ul>
          </nav>
          
          <Route exact path='/' component={() => <ProjectList items={this.state.project} />} />
          <Route exact path='/todo' component={() => <ToDoList items={this.state.todo} />} />
          <Route exact path='/user' component={() => <UserList items={this.state.user} />} />  
          <Route exact path='/login' component={() => <LoginForm />} />
          <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
          <Route component={NotFound404} />
          
        </BrowserRouter>
      </div>
    )
  }
}

export default App;


    