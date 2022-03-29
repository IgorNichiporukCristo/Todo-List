import React from "react";
import { useState } from "react";

const TodoForm = (props) => {
	const [input, setInput] = useState("");
	
	const handleChange = e => {
		setInput(e.target.value)
	}
	
	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id: Date.now(),
			queue: Date.now(),
			text: input,
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