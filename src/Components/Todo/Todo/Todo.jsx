import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoContent from "../TodoContent/TodoContent";
import TodoForm from "../TodoForm/Todoform";
import './todo.scss';

const localTodoList = () => {
  if(localStorage.getItem("todos")) {
    return JSON.parse(localStorage.getItem("todos"))
  } 
  return []; 
};

const Todo = () => {
	const [todos, setTodos] = useState(() => { return localTodoList()})
	const [currTodoNandler, setCurrTodoNandler ] = useState()
	
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	},[todos])

	//Drag and Drop
	const dragStartHandler = (e, todo) => {
		setCurrTodoNandler(todo)
	}
	const dragEndHandler = (e) => {
		e.target.style.opacity = 1
	}
	const dragOverHandler = (e) => {
		e.preventDefault()
		e.target.style.opacity = 0.5
	}
	const dropHandler = (e, todo) => {
		e.preventDefault()
		e.target.style.opacity = 1
		let arr = [...todos]
		arr.splice(todos.indexOf(currTodoNandler), 1)
	  arr.splice(todos.indexOf(todo), 0, currTodoNandler)
		setTodos(arr)
	}

	//changes TodosList
	const addTodo = todo => {
		setTodos([...todos, todo]);
	}
	const deleteTodo = (id) => {
		setTodos(todos.filter(todo => todo.id != id))
	}
	const updateTodo = (todoId, todo) => {
		setTodos(todos.map((el) => el.id == todoId ? todo : el))
	}
	const compliteTodo = (id) => {
		setTodos(todos.map(todo => todo.id == id ? {...todo, isComplete: todo.isComplete} : todo))
	}


	return (
		<div className="todo-countainer">
			<TodoForm onSubmit={addTodo}  />
			<div className="todo-content">
				<TodoContent 
				todos={todos} 
				dragStartHandler={dragStartHandler} 
				dragEndHandler={dragEndHandler}
				dragOverHandler={dragOverHandler}
				dropHandler={dropHandler}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
				compliteTodo={compliteTodo}
				/>
			</div>
			
		</div>
	)
}

export default Todo;