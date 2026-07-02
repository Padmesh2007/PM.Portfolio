import React from 'react'
import Home from './pages/Home'
import Hyperspeed from './components/Hyperspeed'
import TargetCursor from './components/TargetCursor'

function App() {
  return (
    <>
      <TargetCursor />
      <Hyperspeed />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Home />
      </div>
    </>
  )
}

export default App
