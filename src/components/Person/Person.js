import React from "react";

const person = (props) => {
  return (
    <div>
      <h2>
        I'm {props.name} and I am {props.age} years old!
      </h2>
      <h3>{props.children}</h3>
    </div>
  );
};

export default person;
