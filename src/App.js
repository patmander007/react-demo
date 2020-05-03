import React, { useState } from "react";
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

  switchNameHandler = () => {
    console.log(this.previousPersons);
    if (this.previousPersons == null) {
      this.previousPersons = cloneDeep(personsState.persons);
      this.setState({
        persons: [
          { name: "Cherry", age: 26 },
          { name: "Patrick", age: 29 },
          { name: "Paulalong", age: 9 },
        ],
      });
    } else {
      let tempPersons = cloneDeep(this.previousPersons);
      this.previousPersons = cloneDeep(personsState.persons);
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
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        >
          My hobbies are sleeping and sleeping again
        </Person>
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
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
