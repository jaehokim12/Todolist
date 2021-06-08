import React from 'react';
import './item.css';

function Item(props) {
  //console.log(props);
  const todo = props.todo;
  const changeTodoStatus = props.changeTodoStatus;
  const toggleItem = (e) => {
    const id = e.target.dataset.id; //data-id={todo.id}
    changeTodoStatus(id);
  };
  const itemClassName = todo.status === 'done' ? 'done' : '';
  return (
    <li data-id={todo.id} onClick={toggleItem} className={itemClassName}>
      {todo.title}
    </li>
  );
}

export default Item;
