import React from 'react';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul>
      {todos?.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo?.title}
          <button onClick={() => toggleComplete(index)}>
            {todo?.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
