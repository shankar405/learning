// import { useState } from 'react'

import './App.css'
import Button from './components/Button'
// import Counter from './components/Counter'
import Card from './components/Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center gap-2  '>
      {/* <h2 className='bg-red-500'>Counter app</h2>
     <Counter count={count} setCount={setCount}/> */}
     <Card>
      <div className='min-h-[400px] min-w-[250px] text-center'>
        <div className='w-[180px] mx-auto py-2'>

        <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" alt="parrot" width={200} height={200}/>
        </div>
      <h2>Name</h2>
      <p>description</p>
      <Button variant='danger'>Add</Button>
      </div>
     </Card>
     <Card>
      <div className='min-h-[400px] min-w-[250px] text-center'>
        <div className='w-[180px] mx-auto py-2'>

        <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" alt="parrot" width={200} height={200}/>
        </div>
      <h2>Name</h2>
      <p>description</p>
      <Button variant='primary'>Add</Button>
      </div>
     </Card>
     <Card>
      <div className='min-h-[400px] min-w-[250px] text-center'>
        <div className='w-[180px] mx-auto py-2'>

        <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80" alt="parrot" width={200} height={200}/>
        </div>
      <h2>Name</h2>
      <p>description</p>
      <Button variant='outline' >Add</Button>
      </div>
     </Card>
    </div>
  )
}

export default App
