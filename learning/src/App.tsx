// import { useState } from 'react'

import './App.css'
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
//     useEffect(() => {
//     if (theme === "dark") {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [theme]);
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors">
      <Todo/>
       {/* <button
      onClick={()=>dispatch(toggleTheme("dark"))}
    className={`p-2 rounded-full transition-all duration-300
    ${theme === "dark" 
      ? "bg-gray-800 text-gray-200" 
      : "bg-yellow-200 text-gray-800"}`}
>
  {theme === "dark" ? "🌙" : "☀️"}
    </button>

       <button
      onClick={()=>dispatch(toggleTheme("light"))}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button> */}
      {/* <h2 className='bg-red-500'>Counter app</h2>
     <Counter /> */}
     {/* <Card>
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
     </Card> */}
    </div>
  )
}

export default App
