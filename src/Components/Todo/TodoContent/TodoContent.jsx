import React, { useState } from "react";
import "./todo-content.scss";
import { AiFillEdit } from "react-icons/ai";
import { GoArchive } from "react-icons/go";
import TodoForm from "../TodoForm/Todoform";

const TodoContent = ({todos, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, deleteTodo, updateTodo}) => {
	const [updateElement, setUpdateElement] = useState({
		id: null,
		value: "",
	})

	const sumbitUpdate = (todo) => {
		updateTodo(updateElement.id, todo)
		setUpdateElement({
			id: null,
			value: ""
		})
	}
	
	return todos.map((todo) => (
		updateElement.id == todo.id ? 
			<div key={todo.id}>
				<TodoForm updateElement={updateElement} onSubmit={sumbitUpdate} />
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
				<span>{todo.text}</span>
				<AiFillEdit onClick={() => setUpdateElement({id: todo.id, value: todo.text})}/>
				<GoArchive onClick={() => deleteTodo(todo.id)}/>
			</div>
		
	))
}

export default TodoContent;