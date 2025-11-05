import { useState } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2>Counter app</h2>
     <Counter count={count} setCount={setCount}/>
    </div>
  )
}

export default App
