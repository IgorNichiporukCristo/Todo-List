import React, { useState } from "react";
import "./todo-content.scss";
import { AiFillEdit } from "react-icons/ai";
import { GoArchive } from "react-icons/go";
import TodoForm from "../TodoForm/Todoform";

const TodoContent = ({
	todos, 
	dragStartHandler, 
	dragEndHandler, 
	dragOverHandler, 
	dropHandler, 
	deleteTodo, 
	updateTodo,
	compliteTodo,
	}) => {
	const [updateTodoElement, setUpdateTodoElement] = useState({
		id: null,
		value: "",
	})

	const sumbitUpdate = (todo) => {
		updateTodo(updateTodoElement.id, todo)
		setUpdateTodoElement({
			id: null,
			value: ""
		})
	}
	
	return todos.map((todo) => (
		updateTodoElement.id == todo.id ? 
			<div key={todo.id}>
				<TodoForm updateTodoElement={updateTodoElement} onSubmit={sumbitUpdate} />
			</div>
			:<div 
				key={todo.id} 
				className="todo-content"  
				draggable={true}
				onDragStart={(e) => dragStartHandler(e, todo)} 
				onDragLeave={(e) => dragEndHandler(e)}
				onDragEnd={(e) => dragEndHandler(e)}
				onDragOver={(e) => dragOverHandler(e)}
				onDrop={(e) => dropHandler(e, todo)}
			>
				<div onClick={() => compliteTodo(todo.id)}>
					<span>{todo.text}</span>
				</div>
				<AiFillEdit onClick={() => setUpdateTodoElement({id: todo.id, value: todo.text})}/>
				<GoArchive onClick={() => deleteTodo(todo.id)}/>
			</div>
		
	))
}

export default TodoContent;