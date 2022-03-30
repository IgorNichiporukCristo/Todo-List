import React from "react";
import { useState } from "react";

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
    <div>
			<form onSubmit={handleSubmit}>
				<input 
					type="text"
					placeholder="Add item" 
					value={input}
					onChange={handleChange}
				/>
				<button>Add</button>
			</form>
    </div>
  )
}
export default TodoForm;