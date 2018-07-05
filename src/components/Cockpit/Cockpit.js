import React from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {
  const style = {
    backgroundColor: 'green',
    color: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer'
  }

  if (props.showPersons) {
    style.backgroundColor = 'red'
  }

  return (
    <div className={classes.Cockpit}>
      <p> Welcome to a demo of react lets go bruv!!!! </p>
      <button style={style} onClick={props.clicked}>
      Show Persons
      </button>
    </div>
  )
}

export default cockpit
