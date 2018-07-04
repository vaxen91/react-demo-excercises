import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Person from './Person/Person'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <h1>React</h1>
        <p> Welcome to a demo of react lets go bruv!!!! </p>
        <button type='button' className='btn btn-primary'>Switch Name</button>
        <Person name='Mattia' age='23' />
        <Person name='Marta' age='28' >My Hobbies: Racing</Person>
        <Person name='Mirko' age='22' />
      </div>
    )
  }
}

export default App
