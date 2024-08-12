import React from 'react'
import Form from './components/form'
import MessageList from './components/MessageList'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className="container">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <Form />
      </div>
      <MessageList />
    </div>
  )
}

export default App