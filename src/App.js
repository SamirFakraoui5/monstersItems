import React from 'react';
import './App.css';
import { CardList } from './componants/card-list/card-list.componant';

class App extends React.Component {
  constructor(){
    super(); // calls the constructor in the react componant 
    
    this.state = {
      monsters:[]
    }
  };

  // called when the app get rendered to the dom for the 
  // first time
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  render(){
    return (
      <div className="App">
        <h1>Monsters liste</h1>
        <CardList> {
           this.state.monsters.map( monster => {
            return(
              <div key={monster.id}>
                <h2> {monster.username}</h2>        
              </div>
            )
           })  
         }</CardList>
      </div>
    );
  };
}

export default App;
