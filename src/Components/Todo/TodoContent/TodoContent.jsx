import React from "react";
import "./todo-content.scss";
import { AiFillEdit } from "react-icons/ai";
import { GoArchive } from "react-icons/go";

const TodoContent = ({todos}) => {
	return todos.map((todo) => (
		<div key={todo.id} className="todo-content"  draggable={true}>
			<span>{todo.text}</span>
			<AiFillEdit />
			<GoArchive />
		</div>
		
	))
}

export default TodoContent;