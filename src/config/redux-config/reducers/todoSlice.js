import { createSlice, nanoid } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todos',
    initialState:{
        todo:[{
            title: 'abc',
            id: 1
        }]
    },
    reducers:{
        addTodo: (state, action)=>{
            state.todo.push({
                title: action.payload.title,
                id: nanoid()
            })
        },
        removeTodo: (state , action)=>{
            state.todo.splice(action.payload.index , 1)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer