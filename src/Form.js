import React, { useContext } from 'react';
import { TodoContext } from './App';

const Form = () => {
  const { add, inputdata } = useContext(TodoContext);

  return (
    <div>
      <input type="text" name="" onChange={inputdata} />
      <button type="button" onClick={add}>
        추가
      </button>
    </div>
  );
};

export default Form;
