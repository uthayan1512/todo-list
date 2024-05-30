import React from 'react';

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <tr className="todo-item">
      <td>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
      </td>
      <td className={todo.completed ? 'completed' : ''}>{todo.text}</td>
      <td>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
