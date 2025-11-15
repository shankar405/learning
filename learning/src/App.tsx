// import { useState } from 'react'

import './App.css'
import Form from './components/form/Form'
import Product from './components/Product'
import Todo from './components/Todo'
// import Button from './components/Button'
// import Counter from './components/Counter'
// // import Card from './components/Card'
// import { useAppSelector, useAppDispatch } from './app/hook'

// import { toggleTheme } from './features/theme/themeSlice'
// import { useEffect } from 'react'

  
function App() {
  // const [count, setCount] = useState(0)
// const theme = useAppSelector((state) => state.theme.value)
//   const dispatch = useAppDispatch()

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
     {/* todo app */}
      {/* <Todo/> */}

      {/* product page display  */}
      {/* <Product/> */}
      
      {/* form  */}
      <Form/>
    </div>
  )
}

export default App
