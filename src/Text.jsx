import React from 'react';

function Text(props) {
    return (
      <span style ={{color: props.color}}>{props.children}</span>
    );
  }

  export default Text;