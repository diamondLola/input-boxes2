import { useState } from 'react'
import './App.css'
import Box1 from './Components/Box1/Box1'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Box1/>
    </>
  )
}

export default App
