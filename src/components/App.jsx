import React from 'react'

const printHello = (name) => {
  console.log('name', name)
}

const App = (props) => {
  printHello()
  return <h1>Hello</h1>
}
export default App
