import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";
import cloneDeep from "lodash/cloneDeep";

// class components approach
class App extends Component {
  state = {
    persons: [
      { name: "Patrick", age: 29 },
      { name: "Cherry", age: 26 },
      { name: "Paulala", age: 9 },
    ],
  };

  previousPersons = null;

  // switchNameHandler = () => {
  //   if (this.previousPersons == null) {
  //     this.previousPersons = cloneDeep(this.state.persons);
  //     this.setState({
  //       persons: [
  //         { name: "Cherry", age: 26 },
  //         { name: "Patrick", age: 29 },
  //         { name: "Paulalong", age: 9 },
  //       ],
  //     });
  //   } else {
  //     let tempPersons = cloneDeep(this.previousPersons);
  //     this.previousPersons = cloneDeep(this.state.persons);
  //     this.setState({
  //       persons: tempPersons,
  //     });
  //   }
  // };

  //overriding
  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: "Cherry", age: 26 },
  //       { name: newName, age: 29 },
  //       { name: "Paulalong", age: 9 },
  //     ],
  //   });
  // };

  switchNameHandler = (newName, newAge) => {
    this.setState({
      persons: [
        { name: "Cherry", age: 26 },
        { name: newName, age: newAge },
        { name: "Paulalong", age: 9 },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World! I am a react project!!</h1>

        {/* arrow function here is costly and not recommended */}
        <button onClick={() => this.switchNameHandler("Norman", 25)}>
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          clickMe={this.switchNameHandler.bind(this, "Patricio", 20)}
        >
          My hobbies are sleeping and sleeping again
        </Person>

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

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

//functional components approach
// const App = (props) => {
//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Patrick", age: 29 },
//       { name: "Cherry", age: 26 },
//       { name: "Paulala", age: 9 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Cherry", age: 26 },
//         { name: "Patrick", age: 29 },
//         { name: "Paulalong", age: 9 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hello World! I am a react project!!</h1>

//       <button onClick={switchNameHandler}>Switch Name</button>

//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       >
//         My hobbies are sleeping and sleeping again
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//       />
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
// };

//export default App;
