import React from 'react'
import './App.sass'

// COMPONENTS __________________________________________________________________
import Navbar from './components/Navbar'

// VIEWS _______________________________________________________________________
import Home from './views/Home'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="content-container">
        <Home />
      </main>
    </div>
  )
}

export default App
