import React from 'react';
import '../App.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showAddPopup: false,
      toDos: []
    };
  }

  addToDo = (toDo) => {
    console.log('addTodo, ', toDo);
    this.setState({
      toDos: [...this.state.toDos, { 
        todoText: toDo,
        createdAt: new Date()
      }],
      showAddPopup: false
    });
  }

  showAddTodoPopup = (val) => {
    this.setState({
      showAddPopup: val
    })
  }

  render() {
    return (
      <div>
        <header className='app-header'>
          <p className='title'>Hi! This is my first App</p>
          <button className='add-todo-btn' value='true' onClick={this.showAddTodoPopup}>Add ToDo</button>
        </header>
        <div className='main-container'>
          {this.state.showAddPopup && <AddToDo showAddTodoPopup={this.showAddTodoPopup} addToDo={this.addToDo}/>}
          {this.state.toDos.length > 0 && <ToDoList toDos={this.state.toDos}/>}
        </div>
      </div>
    );
  }

}

export default App;
