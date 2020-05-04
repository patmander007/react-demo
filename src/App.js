import React, { Component } from "react";
import "./App.css";
import Person from "./components/Person/Person";
import cloneDeep from "lodash/cloneDeep";

// class components approach
class App extends Component {
  state = {
    persons: [{ name: "Patrick", age: 29 }],
  };

  switchNameHandler = (newName, newAge) => {
    this.setState({
      persons: [{ name: newName, age: newAge }],
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [{ name: event.target.value, age: this.state.persons[0].age }],
    });
  };

  ageChangedHandler = (event) => {
    this.setState({
      persons: [{ name: this.state.persons[0].name, age: event.target.value }],
    });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "18px",
      cursor: "pointer",
    };

    return (
      <div className="App">
        <h1>Hello World! I am a react project!!</h1>

        {/* arrow function here is costly and not recommended */}
        <button
          style={buttonStyle}
          onClick={() => this.switchNameHandler("Norman", 25)}
        >
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          clickMe={this.switchNameHandler.bind(this, "Patricio", 20)}
          changedName={this.nameChangedHandler}
          changedAge={this.ageChangedHandler}
        >
          My hobbies are sleeping and sleeping again
        </Person>
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
