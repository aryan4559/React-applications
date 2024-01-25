import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/components/Card'

function App() {
  return (
    <>
    <h1 className='bg-green-400'>Hello</h1>
    <Card username="Aryan" btnText = "Visit me" />
    <Card username="Sharma" />
    </>
  )
}

export default App
