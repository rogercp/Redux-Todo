import React from 'react';

const TodoForm =props=>{
return (

        <form onSubmit={props.addToDo}>
            <input
                type="text"
                name="newToDo"
                value={props.newToDo}
                onChange={props.handleChanges}
                placeholder="Add To List"
            />
            <button type="submit">ADD IT</button>
        </form>
)

}
export default TodoForm;
