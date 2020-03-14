import React, { Component } from "react";

const Navbar = ({counters}) => {
  const totalCounters = counters.filter(c => c.value > 0).length
  let total = 0;
  counters.forEach(counter => {
    if(counter.value>0) total += counter.value
  });
  return (
    <nav className="navbar navbar-light bg-light">
      <span class="navbar-brand mb-0 h1">Navbar
      <span className="badge badge-pill badge-dark m-2">
        {totalCounters}
      </span>
      <span className="badge badge-pill badge-light m-2">
        {total}
      </span>
      </span>
    </nav>
  );
}

export default Navbar;
