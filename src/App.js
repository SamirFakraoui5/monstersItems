import React from 'react';
import './App.css';
import { CardList } from './componants/card-list/card.componant';

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
         <h1 className='text'>Monsters liste</h1>
         {
           this.state.monsters.map( monster => {
            return(
              <div key={monster.id} className="monster">
                <h2> {monster.username}</h2>
                <h3>{monster.email}</h3>
                <CardList/>
              </div>
            )
           }) 
         }
      </div>
    );
  };
}

export default App;
