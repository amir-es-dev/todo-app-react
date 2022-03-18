import './App.css';
import Header from "./components/Header"
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import {useState} from "react";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTodo todoList={todoList} setTodoList={setTodoList} />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;
