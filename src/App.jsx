import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoApp from './Components/todoApp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoApp></TodoApp>
    </>
  )
}

export default App
