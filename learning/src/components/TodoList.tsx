import { Edit2, Trash2 } from "lucide-react"
import { useAppDispatch, useAppSelector } from "../app/hook"
import { deleteTodo, updateCheckbox, type todo } from "../features/todo/todoSlice"

type props={
  handleEdit:(todo:todo)=>void;
}
const TodoList = ({handleEdit}:props) => {
    const todo=useAppSelector((state)=>state.todo.todos)
    const dispatch=useAppDispatch()
    console.log(todo)
 function handleClick(todo:todo){
   handleEdit(todo)

 }
   
  return (

    <div>
        {todo.map((todo)=>
        {
            return(
            <div key={todo.id} className="flex gap-2 justify-between border-b p-2">
                <div className="flex gap-2 font-semibold">
                <input type="checkbox" checked={todo.isCompleted} onChange={()=>dispatch(updateCheckbox(todo.id))}/>
                <p className="font-semibold text-xl">{todo.title}</p>
                </div>
                 <div className=" flex gap-2">
                   <button
                    onClick={()=>handleClick(todo)}
                   ><Edit2 size={20} className="hover:text-green-500 hover:cursor-pointer"/></button> 
                   <button
                   onClick={()=>dispatch(deleteTodo(todo.id))}
                   >
                    <Trash2 size={20} 
                    className="hover:text-red-500 hover:cursor-pointer"
                    
                    /></button> 
                 </div>

            </div>
            )
        })}
    </div>
  )
}

export default TodoList