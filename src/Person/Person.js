import React from "react";

import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <p>
        I'm {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
      <label>
        Name:{" "}
        <input type="text" onChange={props.changedName} value={props.name} />
      </label>{" "}
      <label>
        Age: <input type="text" onChange={props.changedAge} value={props.age} />
      </label>
      <button onClick={props.click}>Delete Me</button>
    </div>
  );
};

export default person;
