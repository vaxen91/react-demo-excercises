import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Person from './Person/Person'

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              change={(event) => this.nameChangeHandler(event, person.id)}
            />
          })}
        </div>
      )

      style.backgroundColor = 'red'
    }
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <h1>React</h1>
        <p> Welcome to a demo of react lets go bruv!!!! </p>
        <button style={style} onClick={this.togglePersonHandler}>
          Show Persons
        </button>
        {persons}
      </div>
    )
  }
}

export default App
