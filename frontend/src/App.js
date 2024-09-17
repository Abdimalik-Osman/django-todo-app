import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import "./App.css"
const App = () => {
  const [todos, setTodos] = useState([]);

  // Fetch todos from the API
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/todos/')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  // Add a new todo
  const addTodo = (text) => {
    axios.post('http://127.0.0.1:8000/api/todos/', { title: text, completed: false })
      .then((response) => {
        setTodos([...todos, response.data]);
      });
  };

  // Toggle completion
  const toggleComplete = (index) => {
    const todo = todos[index];
    axios.put(`http://127.0.0.1:8000/api/todos/${todo.id}/`, {
      ...todo, completed: !todo.completed
    }).then(() => {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    });
  };

  // Remove a todo
  const removeTodo = (index) => {
    const todo = todos[index];
    axios.delete(`http://127.0.0.1:8000/api/todos/${todo.id}/`)
      .then(() => {
        setTodos(todos.filter((_, i) => i !== index));
      });
  };

  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default App;
