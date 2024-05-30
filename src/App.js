import React, { useState, useEffect } from 'react';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const initialTodos = [
      { id: 1, text: 'React', completed: false },
      { id: 2, text: 'C/C++', completed: false },
      { id: 3, text: 'Python', completed: false },
    ];
    setTodos(initialTodos);
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
