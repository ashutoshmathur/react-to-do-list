import React from 'react';
import '../App.css';
import AddToDo from './AddToDo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      showAddPopup: false,
    };
  }

  addToDo = () => {
    console.log('addToDo btn click');
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
          {this.state.showAddPopup && <AddToDo showAddTodoPopup={this.showAddTodoPopup}/>}
        </div>
      </div>
    );
  }

}

export default App;
