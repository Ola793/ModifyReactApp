import React from 'react';

const PlayerPreview = ({ username, avatar, children }) => {
  return (
    <div>
      <div className = 'column'>
        <img className = 'avatar' src = { avatar } alt = 'avatar' />
        <h2 className = 'username'>@{ username }</h2>
      </div>
      { children }
    </div>
  );
};

export default PlayerPreview;
