import React, { useEffect, useRef, useState } from 'react';
import './todo.css';

const Todo = () => {
  const inputRef = useRef(null);
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    const jsonData = fetch('http://localhost:8000/api/todo').then((response) => response.json());
    jsonData.then((data) => {
      setTodoList(data.todo);
    });
  }, []);
  const removeFromList = async (id) => {
    await fetch('http://localhost:8000/api/todo/'+id, { method: 'DELETE' });
    setTodoList(todoList.filter(listItem => listItem.id !== id));
  }
  const addToList = async () => {
    const item = inputRef.current.value;
    const response = await fetch('http://localhost:8000/api/todo', { method: 'PUT', body: JSON.stringify({ item: item }) })
    const data = await response.json();
    setTodoList([...todoList, data]);
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
