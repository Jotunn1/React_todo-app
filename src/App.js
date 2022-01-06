import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {
  const [input, setInput] = useState('');
  const [todosList, setTodosList] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    getLocalTodos()
  }, [])
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todosList, status])
  const saveLocalTodos = () => localStorage.setItem("todosList", JSON.stringify(todosList));
  const getLocalTodos = () => {
    if (localStorage.getItem("todosList") === null) {
      localStorage.setItem("todosList", JSON.stringify([]))
    }
    else {
      let getTodosFromLocal = JSON.parse(localStorage.getItem("todosList"))
      setTodosList(getTodosFromLocal)
    }
  }
  const filterHandler = () => {
    switch (status) {
      case "completed": setFilteredTodos(todosList.filter(todo => todo.completed === true))
        break;
      case "uncompleted": setFilteredTodos(todosList.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todosList);
        break;
    }
  }
  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form
        todosList={todosList}
        setTodosList={setTodosList}
        input={input}
        setInput={setInput}
        setStatus={setStatus} />
      <ToDoList todosList={todosList} setTodosList={setTodosList} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
