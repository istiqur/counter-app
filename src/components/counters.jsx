import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({ counters, onGlobalReset, onDelete, onIncrement, onDecrement, onReset }) => {

    return (
      <div>
        <button className="btn btn-sm btn-success m-2" onClick={onGlobalReset}>
          Global Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onReset={onReset}
            counter={counter}
          />
        ))}
      </div>
    );
}

export default Counters;
