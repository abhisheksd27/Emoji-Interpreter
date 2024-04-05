import { useState } from 'react'

import './index.css'
import Emoji from "./Emoji"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Emoji/>
    </>
  )
}

export default App
