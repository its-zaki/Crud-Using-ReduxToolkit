import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from './config/redux-config/reducers/todoSlice'

const App = () => {

  const TodoRef = useRef();
  // use Dispatch 
  const Dispatch = useDispatch();
  // use selector 
  const selector = useSelector(state => state.todo)

  const AddTodo = (e) => {
    e.preventDefault()
    // console.log(TodoRef.current.value);
    Dispatch(addTodo({
      title: TodoRef.current.value
    }))
    // console.log(selector);
    TodoRef.current.value = ""
  }

  // delete todo 
  const deleteTodo =(index)=>{
    Dispatch(removeTodo({
      index: index
    }))
  }

  return (
    <>
    <h2>Todo Using Redux </h2>
      <form onSubmit={AddTodo}>
        <input type="text" placeholder='enter your todo' ref={TodoRef} />
        <button>Add Todo</button>
      </form>
      <ul>{selector.map((item,index)=>{
        return <li key={item.id}>{item.title} <button onClick={()=>deleteTodo(index)}>Delete</button></li>
      }) }</ul>
    </>

  )
}

export default App