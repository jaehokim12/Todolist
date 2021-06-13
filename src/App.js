import './App.css';
import React, { useState, useEffect } from 'react';
import List from './List';
import useFetch from './useFetch';
import Form from './Form';

export const TodoContext = React.createContext();

function App() {
  const [Todo, SetTodo] = useState([]);
  const [newTodo, SetnewTodo] = useState();

  const loading = useFetch(SetTodo, 'http://localhost:8080/todo');

  const inputdata = (e) => {
    SetnewTodo(e.target.value);
  };

  const add = () => {
    SetTodo([...Todo, { id: Todo.length + 1, title: newTodo, status: 'todo' }]);
    console.log(Todo);
  };

  const changeTodoStatus = (id) => {
    const ID = Number(id);
    const updateTodo = Todo.map((todo) => {
      if (todo.id === ID) {
        if (todo.status === 'done') todo.status = 'todo';
        else todo.status = 'done';
      }
      return todo;
    });
    SetTodo(updateTodo);
  };

  return (
    <div className="App">
      <TodoContext.Provider value={(Todo, add, inputdata)}>
        <Form add={add} inputdata={inputdata} />

        <List
          Todo={Todo}
          loading={loading}
          changeTodoStatus={changeTodoStatus}
        />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
