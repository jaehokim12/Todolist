import React from 'react';
import Item from './Item';

function List(props) {
  const todos = props.Todo; //todos 는 값이 들어있는 배열상태
  const loading = props.Loading;
  const changeTodoStatus = props.changeTodoStatus;

  const todolist = todos.map(function (todo) {
    //console.log(todo);
    return (
      <Item key={todo.id} todo={todo} changeTodoStatus={changeTodoStatus} />
    );
  });

  return <div>{todolist}</div>;
}

export default List;
