import React, { Component } from "react";

const Counter = ({ counter, onDelete, onIncrement, onDecrement, onReset }) =>  {

  function getBadgeClasses(count) {
    return `badge m-2 badge-${count===0 ? 'warning' : count<0? 'danger':'primary'}`
  }

  function formatCount(count) {
    return count === 0 ? "Zero" : count;
  }

  return (
      <div>
        <button
          onClick={() => onReset(counter)}
          className="btn btn-sm btn-outline-info m-2"
        >
          Reset
        </button>
        <button
          onClick={() => onDecrement(counter)}
          className="btn btn-sm btn-outline-secondary m-2"
        >
          Decrement
        </button>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-sm btn-outline-dark m-2"
        >
          Increment
        </button>
        <span className={getBadgeClasses(counter.value)}>{formatCount(counter.value)}</span>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-sm btn-outline-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }

export default Counter;
