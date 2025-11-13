import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from '../../app/store'

export interface todo {
    id: string,
    title: string,
    isCompleted: boolean

}
interface initialStateType {
    todos: todo[]
}

const initialState: initialStateType= {
    todos: []
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state,action) => {
             state.todos= [...state.todos, action.payload]
        },
        updateCheckbox:(state,action)=>{
           const newtodo=state.todos.map((todo)=>{
            if(todo.id==action.payload){
           return { ...todo,isCompleted :!todo.isCompleted}
        }else{
            return todo
        }
    })
            state.todos=newtodo
        },
        deleteTodo:(state,action)=>{
            const newtodo=state.todos.filter((todo)=>{
                return todo.id!==action.payload
            })
            state.todos=newtodo
        },
        editTodo:(state,action)=>{
            const {id,title}=action.payload
            const Todo=state.todos.map((todo)=>todo.id===id ?  {...todo,title:title}:todo )
            state.todos=Todo
        }
    }
    }
)
export const selectCount = (state: RootState) => state.todo.todos
export const { addTodo ,updateCheckbox,deleteTodo,editTodo} = todoSlice.actions
export default todoSlice.reducer