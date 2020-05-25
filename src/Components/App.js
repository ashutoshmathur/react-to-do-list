import React from 'react';
import '../App.css';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddPopup: false,
      toDos: [],
      title: 'Hi! This is my first App'
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  addToDo = (toDo) => {
    console.log('addTodo, ', toDo);
    // server request
    //server request response
    // if 200
    this.setState({
      toDos: [...this.state.toDos, { 
        todoText: toDo,
        createdAt: new Date()
      }],
      showAddPopup: false
    });

    //if 500 internal server error

  }

  showAddTodoPopup = (val) => {
    this.setState({
      showAddPopup: val
    })
  }

  render() {

    console.log("render");
    console.log('toDos array: ', this.state.toDos);
    return (
      <div>
        <header className='app-header'>
          <p className='title'>{this.state.title}</p>
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
