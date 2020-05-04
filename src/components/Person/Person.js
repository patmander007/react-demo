import React from "react";
import "./Person.css";

const person = (props) => {
  return (
    <div className="Person">
      <h2 onClick={props.clickMe}>
        I'm {props.name} and I am {props.age} years old!
      </h2>
      <label>
        Name:
        <input type="text" onChange={props.changedName} value={props.name} />
      </label>
      <label>
        Age:
        <input type="text" onChange={props.changedAge} value={props.age} />
      </label>

      <h3>{props.children}</h3>
    </div>
  );
};

export default person;
