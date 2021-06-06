import './App.css';
import { useState, useEffect } from 'react';
import List from './List';
function App() {
  const [Todo, SetTodo] = useState([]);
  const [newTodo, SetnewTodo] = useState();
  const [loading, SetLoading] = useState(false);
  const inputdata = (e) => {
    SetnewTodo(e.target.value);
  };

  const add = () => {
    SetTodo([...Todo, newTodo]);
  };

  const fethInitialData = async () => {
    SetLoading(true);
    const response = await fetch('http://localhost:8080/todo');
    const InitialData = await response.json();
    SetTodo(InitialData);
    SetLoading(false);
  };
  useEffect(() => {
    fethInitialData();
  }, []);
  return (
    <div className="App">
      <input type="text" name="" onChange={inputdata} />
      <button type="button" onClick={add}>
        추가
      </button>
      <List Todo={Todo} loading={loading} />
    </div>
  );
}

export default App;
