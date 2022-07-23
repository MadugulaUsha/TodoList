import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [todo, setTodo] = useState('');
  const [error, setError] = useState();

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todo.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name',
      });
      return;
    }
    props.onAddUser(todo);
    setTodo('');
  };

  const todoChangeHandler = (event) => {
    setTodo(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addTodoHandler}>
          <label htmlFor="todo">ToDo</label>
          <input
            id="todo"
            type="text"
            value={todo}
            onChange={todoChangeHandler}
          />
          <Button type="submit">Add Todo</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
