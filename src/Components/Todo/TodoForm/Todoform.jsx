import React from "react";
import { useState } from "react";
import './todo-form.scss';

const TodoForm = (props) => {
	const [input, setInput] = useState(props.updateTodoElement ? props.updateTodoElement.value : "");
	
	const handleChange = e => {
		setInput(e.target.value)
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id: Date.now(),
			text: input,
			isComplete: false
		})
		setInput("");
	}
  return (
    <div className={props.updateTodoElement ? "todo-form-countainer todo-form-countainer-margin": "todo-form-countainer"}>
			<form className="todo-form" onSubmit={handleSubmit}>
				<input 
				  className="todo-input"
					type="text"
					placeholder="Add item" 
					value={input}
					onChange={handleChange}
				/>
				<button className={props.updateTodoElement ?"todo-button-ubpdate": "todo-button"}>Add</button>
			</form>
    </div>
  )
}
export default TodoForm;