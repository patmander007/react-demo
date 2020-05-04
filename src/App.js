import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import cloneDeep from "lodash/cloneDeep";
import styled from "styled-components";

class App extends Component {
  personsInitValue = [
    { id: "1", name: "Max", age: 28 },
    { id: "2", name: "Manu", age: 29 },
    { id: "3", name: "Stephanie", age: 26 },
  ];

  state = {
    persons: cloneDeep(this.personsInitValue),
    otherState: "some other value",
    showPersons: false,
  };

  deletePersonHandler = (index) => {
    const updatedPersons = cloneDeep(this.state.persons);
    updatedPersons.splice(index, 1);
    this.setState({
      persons: updatedPersons,
    });
  };

  nameChangedHandler = (event, id) => {
    const personToChange = this.state.persons.find((x) => {
      return x.id === id;
    });

    personToChange.name = event.target.value;

    this.setState({
      persons: this.state.persons,
    });
  };

  ageChangedHandler = (event, id) => {
    const personToChange = this.state.persons.find((x) => {
      return x.id === id;
    });

    personToChange.age = event.target.value;

    this.setState({
      persons: this.state.persons,
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
    });
  };

  resetPersonsHandler = () => {
    this.setState({
      persons: cloneDeep(this.personsInitValue),
    });
  };

  render() {
    // const buttonSytle = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   display: "block",
    //   margin: "10px  auto",
    // };

    const StyledButton = styled.button`
      padding: 15px 25px;
      font-size: 16px;
      text-align: center;
      cursor: pointer;
      outline: none;
      color: #fff;
      background-color: #4caf50;
      border: none;
      border-radius: 10px;
      box-shadow: 0 8px #999;
      :hover {
        background-color: #3e8e41;
      }
      :active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
      }
      margin: 16px 10px auto;
    `;

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={person.id}
                changedName={(event) => {
                  this.nameChangedHandler(event, person.id);
                }}
                changedAge={(event) => {
                  this.ageChangedHandler(event, person.id);
                }}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>

        <div>
          <StyledButton onClick={this.togglePersonHandler}>
            Toggle Show/Hide Persons
          </StyledButton>

          <StyledButton onClick={this.resetPersonsHandler}>
            Reset Persons
          </StyledButton>
        </div>

        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
