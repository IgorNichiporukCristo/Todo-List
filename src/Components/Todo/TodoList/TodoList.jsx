import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import TodoContent from "../TodoContent/TodoContent";
import TodoForm from "../TodoForm/Todoform";

const localTodoList = () => {
  if(localStorage.getItem("todos")) {
    return JSON.parse(localStorage.getItem("todos"))
  } 
  return []; 
};

const Todo = () => {
	const [todos, setTodos] = useState(() => { return localTodoList()});
	
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos))
	},[todos])

	const addTodo = todo => {
		setTodos([...todos, todo]);
	}


	return (
		<div>
			<TodoForm onSubmit={addTodo} />
			<TodoContent todos={todos} />
		</div>
	)
}

export default Todo;