import React from 'react';

function Form(props) {
  console.log(props);
  const inputdata = props.inputdata;
  const add = props.add;
  return (
    <div>
      <input type="text" name="" onChange={inputdata} />
      <button type="button" onClick={add}>
        추가
      </button>
    </div>
  );
}

export default Form;
