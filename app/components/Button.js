import React from 'react';

function Button(props) {
  return (
    <div>
      <button onClick={props.handleClick}>Erase Content!</button>
    </div>
  );
}

export default Button;
