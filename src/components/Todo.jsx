import React, { useRef, useState } from 'react';
import './todo.css';

const Todo = () => {
  const inputRef = useRef(null);
  const [todoList, setTodoList] = useState([{id: '123', item: 'Wake up'}, { id: '456', item: 'Brush Teeth'}]);
  const removeFromList = (id) => {
    setTodoList(todoList.filter(listItem => listItem.id !== id));
  }
  const addToList = () => {
    setTodoList([...todoList, {id: Date.now(), item: inputRef.current.value }]);
    inputRef.current.value = '';
  }
  const prepareTodolist = (list) => {
    const todo = list.map(listItem => (<div key={listItem.id} className="list-item" onClick={() => {removeFromList(listItem.id)}}>{listItem.item}</div>));
    return todo;
  }
  return <>
    <h1>My TaskList</h1>

    <input type="text" ref={inputRef} />
    <button className="btn btn-primary" onClick={(e) => {
      e.preventDefault();
      addToList();
    }}>Add</button>
    <div>{prepareTodolist(todoList)}</div>
  </>
};

export default Todo;
