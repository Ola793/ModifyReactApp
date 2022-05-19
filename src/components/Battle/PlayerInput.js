import React, { useState } from 'react';

const PlayerInput = ({ id, label, onSubmit }) => {
  const [username, setUsername] = useState('');

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, username);
  };

  return (
    <form className = 'column' onSubmit = { handleSubmit }>
      <label className = 'header' htmlFor = 'username'>
        { label }
      </label>
      <input
        id = 'username'
        type = 'text'
        placeholder = 'Github Username'
        autoComplete = 'off'
        value = { username }
        onChange = { handleChange }
      />
      <button className = 'button' disabled = { !username } type = 'submit'>
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
