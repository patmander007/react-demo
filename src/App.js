import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";
import cloneDeep from "lodash/cloneDeep";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    persons: [
      { name: "Patrick", age: 29 },
      { name: "Cherry", age: 26 },
      { name: "Paula", age: 9 },
    ],
  };

  previousPersons = null;

  switchNameHandler = () => {
    console.log(this.previousPersons);
    if (this.previousPersons == null) {
      this.previousPersons = cloneDeep(this.state.persons);
      this.setState({
        persons: [
          { name: "Cherry", age: 26 },
          { name: "Patrick", age: 29 },
          { name: "Paula", age: 9 },
        ],
      });
    } else {
      let tempPersons = cloneDeep(this.previousPersons);
      this.previousPersons = cloneDeep(this.state.persons);
      this.setState({
        persons: tempPersons,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World! I am a react project!!</h1>

        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          My hobbies are sleeping and sleeping again
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement(
    //     "h1",
    //     null,
    //     "Hi, I'm a React app inside createElement"
    //   )
    // );
  }
}

export default App;
