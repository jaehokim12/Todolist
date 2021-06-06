mport React from 'react';

function List(props) {
  console.log(props);
  const todos = props.Todo; //todos 는 값이 들어있는 배열상태
  const loading = props.Loading;

  let todolist = <div>...loading</div>;
  if (!loading)
    todolist = todos.map(function (todo) {
      return <li key={todo.id}>{todo.title}</li>;
    });

  return <div>{todolist}</div>;
}

export default List;
