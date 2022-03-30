import React from "react";
import './main.scss';
import Todo from "./Todo/Todo/Todo";


function Main() {

  return (
    <div className="body">
      <div className="main-content">
        <Todo />
      </div>  
    </div> 
  )
}

export default Main;