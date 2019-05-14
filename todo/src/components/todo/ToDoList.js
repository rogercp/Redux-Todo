import React from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos"
// import { connect } from "react-redux";
// import styled from 'styled-components';



class ToDoList extends React.Component {
  state = {
    newToDo: "",
    completed: false
  };


  render() {
    return (
      <>
        <Todos/>
        <TodoForm/>
      </>
    );
  }
}
export default ToDoList;

