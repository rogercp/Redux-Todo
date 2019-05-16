import React from 'react';
import ToDoList from './components/todo/ToDoList'
import './App.css';

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <h1>ToDo List</h1>
      <ToDoList/>
    </div>
  );
}  
}

export default App;
