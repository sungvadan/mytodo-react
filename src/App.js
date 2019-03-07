import { Component } from 'react'
import AddTodo from './AddTodo'
import TodoList from './components/TodoList'
import Filter from './Filter'
import logo from './logo.svg'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="app">
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
