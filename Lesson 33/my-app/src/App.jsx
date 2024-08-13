import Todo from "./components/Todo";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoAdd from './components/TodoAdd';
import './style/style.css'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Todo />} />
      <Route path="/todoAdd" element={<TodoAdd />} />
    </Routes>
  );
}

export default App;
