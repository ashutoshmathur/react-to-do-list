import React from 'react';

export default function ToDoList(props) {

    return (
        <div className="to-do-list-component">
            <p className="to-do-list-component-title">Your To-Do List</p>
            {props.toDos.map((item, index) => {
                console.log(item);
                return <div key={index} className="to-do-list-item">
                <p>{index + 1}.</p>
                <p className="to-do-list-component-text">{item.todoText}</p>
                <p className="to-do-list-component-date">{item.createdAt.toLocaleDateString()}</p>
                </div>
            })}
        </div>
    );
}