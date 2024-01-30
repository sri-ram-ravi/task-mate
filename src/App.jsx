import React from 'react'
import Header from './Components/Header'
import AddTask from './Components/AddTask'
import ShowTask from './Components/ShowTask'

const App = () => {
  return (
    <div>
        <Header/>
        <AddTask/>
        <ShowTask/>
    </div>
  )
}

export default App