import React from "react";
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
        <form onSubmit={this.addToDo}>
          <input
            type="text"
            name="newToDo"
            value={this.state.newToDo}
            onChange={this.handleChanges}
            placeholder="Add TO List"
          />
          <button type="submit">ADD IT</button>
        </form>
      </>
    );
  }
}
export default ToDoList;

