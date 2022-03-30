import React from "react";
import "./todo-content.scss";
import { AiFillEdit } from "react-icons/ai";
import { GoArchive } from "react-icons/go";

const TodoContent = ({todos, dragStartHandler, dragEndHandler, dragOverHandler, dropHandler, deleteTodo}) => {
	return todos.map((todo) => (
		<div 
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
			<AiFillEdit />
			<GoArchive onClick={() => deleteTodo(todo.id)}/>
		</div>
		
	))
}

export default TodoContent;