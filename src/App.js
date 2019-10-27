import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      todos: [],
      isClicked: false,
      count:0,
    };
  }

 
handleDelete (itemToBeDeleted){
  console.log(itemToBeDeleted);
  const newTodos = this.statetodos.filter((_item) => {
    return _item !==itemToBeDeleted
  });
  this.setState({todos: newTodos});
}

  toggle = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  increase = () =>{
    this.setState({ count: this.state.count + 1})
  }
   
  resetCount = () => {
    this.setState({ count: this.state.count = 0})
  }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value})
  }

  forSubmit = event => {
    event.preventDefault()
   const currentTodos = this.state.todos
   currentTodos.push(this.state.inputText)
   console.log(currentTodos)
   this.setState({ todos: currentTodos, inputText: '' })
  }

render() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter:</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.increase}>Increase Counter</button>
        <button onClick={this.resetCount}>Reset Counter</button>
        <button onClick={this.toggle}>{this.state.isClicked ? "Counter: ON" : "Counter: OFF"}</button>
        <form onSubmit={this.submitTodo}>
          <input type='text' onChange={this.handleTextChange} value={this.state.inputText}/>
          <button type='submit'>Add Todo</button>
        </form>
        <h2><DisplayList handeDelete={this.handleDelete.bind(this)} todos={ this.state.todos}/></h2>

      </header>
      
    </div>
  );
}
}
export default App;
