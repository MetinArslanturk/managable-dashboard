import React from 'react';

export default (element, removeHandler) => {
  return (
    <div key={element.i}>
      {element.i}{' '}
      <button
        type="button"
        onClick={() => {
          removeHandler(element.i);
        }}
      >
        X
      </button>
    </div>
  );
};
