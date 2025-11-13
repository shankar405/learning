import  { useState } from 'react'
import { useAppDispatch } from '../app/hook'
import { v4 as uuidv4 } from 'uuid';
import { addTodo, editTodo, type todo } from '../features/todo/todoSlice';
import TodoList from './TodoList';
const Todo = () => {
  const [title,setTitle]=useState("")
  const [edit,setedit]=useState<todo|null>(null)
 const dispatch=useAppDispatch()
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    setTitle(e.target.value)
  }

   function handleEdit(todo:todo){
    setTitle(todo.title)
   setedit(todo)
   console.log("hello")
 }
 function handlechange(){

  if(edit){
    const id=edit.id
    dispatch(editTodo({id,title}))
  }else{
      const todo={
       id:uuidv4(),
       title,
       isCompleted:false
      }
      dispatch(addTodo(todo))
      setTitle("")
  }
 }
  console.log(title)
  return (
    <div className='bg-white text-black w-2/3 h-[600px] p-4 rounded-md'>
        <h3 className='text-center text-2xl font-bold'>Todo</h3>
        <div className='text-center'>
            <input type="text" placeholder='Enter your todos'
            className=' border border-gray-400 rounded-md p-1 w-[400px]  '
            value={title}
            onChange={(e)=>handleChange(e)}
            />
            <button className='bg-black text-white p-1 px-2 rounded-md ml-1'
            onClick={handlechange}
            >{edit? "update":"Add"}</button>
        </div>
<TodoList handleEdit={handleEdit}/>
    </div>
  )
}

export default Todo