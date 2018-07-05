import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { persons: [ {name: 'Mattia', age: 23}, {name: 'Marta', age: 28} ] }

    this.switchNameHandler = (newName, anotherNewName) => {
      console.log('CLICK')
      this.setState({ persons: [
        {name: this.state.persons[1].name, age: 23},
        {name: this.state.persons[0].name, age: 28}],
      changeState: 'yes'
      })
    }

    this.nameChangeHandler = (event) => {
      this.setState({ persons: [
        {name: this.state.persons[0].name, age: 23},
        {name: event.target.value, age: 28}],
      changeState: 'yes'
      })
    }
  }

  // this.switchNameHandler.bind(this, this.state.persons[1].name, this.state.persons[0].name)

  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <h1>React</h1>
        <p> Welcome to a demo of react lets go bruv!!!! </p>
        <button onClick={() => this.switchNameHandler()}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler}
          change={this.nameChangeHandler}
        />
      </div>
    )
  }
}

export default App
