import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';/*we can exclude .js extension it is automatically added */

class App extends Component { //also called as container(App), because it contains states
  state = {
    persons: [
      { id: 'asfdf1', name: 'Max', age: 28},
      { id: 'sfad1', name: 'Manu', age: 29},
      { id: 'dsfa1', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',//will not change
    showPersons: false
  }

  


  nameChangedHandler = (event, id) => {
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
      });

      //1st Method
      const person = {
        ...this.state.persons[personIndex] ///use SPREAD Operator for immutable (Object)
      };

      //2nd Method
      //const person = Object.assign({}, this.state.persons[personIndex]);

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person; 

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {//use THis syntax i.e, arrow function, so that the 'this' keyword always points to the class.
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
  }

  //053 CODE
  deletePersonHandler = (personIndex) => {
      
      //1st Approach

      //const persons = this.state.persons.slice();//slice copies full array and stores it in persons, 
      //since persons is an objects and changing that is a bad practice i.e, object will be mutable so use slice

      //2nd Approach: SPREAD Operator
      const persons = [...this.state.persons];//spreads the elements in persons into list of elements,and gets added to this array.

      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }

  render() {

    // for inline style 
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',//make sure u put all these values into quotaion marks as we are writing javascript here
      cursor: 'pointer'
    }


    //050 code
      let persons = null;//by default it is null

      if(this.state.showPersons){ //we can write if statements since we are not inside JSX( i.e, return ) 
                                  // if showPersons is true it will hold the below JSX code. 
        persons = (
              <div>

                {/*052 Code*/}
                  {this.state.persons.map((person, index) => {

                    return <Person 
                    click={() => this.deletePersonHandler(index)}
                    name={person.name} 
                    age={person.age} 
                    key={person.id}
                    changed={(event) =>this.nameChangedHandler(event, person.id)} />

                  })}  {/* single curly braces to render something dynamic in our code */}

                {/*
                  <Person
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} />
                  
                  <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!')}//don't add parathesis after switchNameHandler as it will execute directly
                  changed={this.nameChangedHandler}>
                  My Hobbies: Racing </Person>
                  
                  <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} />
                */}

                
              </div>
        );
      }


      return (
          <div className="App">
            <h1>Hi, I'm a React App</h1>
            <p>This is really working</p>
          
          <button 
          style={style} 
          onClick={this.togglePersonsHandler}>Toggle Persons</button>


            {/*{ this.state.showPersons ?*/} 
            
            {/*
              <div>

                <Person
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
                
                <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Max!')}
                changed={this.nameChangedHandler}>
                My Hobbies: Racing </Person>
                
                <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />

              </div>*/}{/* : null*/}
            
          {persons} {/*Now we print the above person in return which is a JSX*/}

          </div>
      );

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, `it's working?`));
  }
}

export default App;
