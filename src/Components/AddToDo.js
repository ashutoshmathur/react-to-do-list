import React, { useState } from 'react';

export default function AddToDo(props) {

    const [todoText, setTodoText] = useState("");

    return (
        <div className="add-todo-component">
            <button className='add-todo-component-close-btn' onClick={() => props.showAddTodoPopup(false)} >x</button>
            <textarea className='add-todo-component-field' placeholder='Add your ToDo here' value={todoText} onChange={(e) => {
                setTodoText(e.target.value);
            }} />
            <button className='add-todo-component-add-btn' onClick={() => {
                console.log('add btn click   ', todoText);
            }} >Add</button>
        </div>
    );
}