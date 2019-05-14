import React from "react";
import TodoForm from "./TodoForm";
import Todos from "./Todos"
// import { connect } from "react-redux";
// import styled from 'styled-components';



class ToDoList extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        newToDo: "",
  };
}

        handleChanges=e=>{
            this.setState({[e.target.name]:e.target.value})
        }

        addTodo=()=>{
        const {newToDo}=this.state;
        const newTodo={
            id:this.props.todos.length+1,
            completed:false,
            text:newToDo
        };
        this.props.newToDo(newTodo);
        this.setState({newToDo:''});

        }


  render() {
    return (
      <>
        <Todos/>
        <TodoForm handleChanges={this.handleChanges} addTodo={this.addTodo}/>
      </>
    );
  }
}
export default ToDoList;

