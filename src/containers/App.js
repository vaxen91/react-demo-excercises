import React, { Component } from 'react'
import logo from '../asset/logo.svg'
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [
        {id: 1, name: 'Mattia', age: 23},
        {id: 2, name: 'Marta', age: 28}
      ],
      showPersons: false
    }

    this.deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice() best practice
      const persons = [...this.state.persons]
      persons.splice(personIndex, 1)
      this.setState({persons: persons})
    }

    this.nameChangeHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(per => {
        return per.id === id
      })

      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value

      const persons = [...this.state.persons]

      persons[personIndex] = person

      this.setState({ persons: persons
      })
    }

    this.togglePersonHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({ showPersons: !doesShow })
    }
  }

  // this.switchNameHandler.bind(this, this.state.persons[1].name, this.state.persons[0].name)
  render () {
    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler} />
        </div>
      )
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <h1>React</h1>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonHandler} />
        {persons}
      </div>
    )
  }
}

export default App
