import React from 'react';
import './App.css';
import { CardList } from './componants/card-list/card-list.componant';
import { SearchBox } from './componants/searchBox/search-box.componant';

class App extends React.Component {
  constructor(){
    super(); // calls the constructor in the react componant 
    
    this.state = {
      monsters:[],
      searchField :''
    }

    // the solution is to use arou function
    this.handlChange = this.handlChange.bind(this)
  };

  // called when the app get rendered to the dom for the 
  // first time
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters : users}))
  }

  // detect   the change of the input value
  handlChange = (event) =>{
    console.log("change function",this);
     this.setState({searchField:event.target.value})
  } 
  render(){
    // distraction variable ino const 
    const {searchField , monsters} = this.state;
    const filtredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1 className='title'>Monsters Rolodex</h1>
        <SearchBox  handlChange={this.handlChange} placeholder='search monsters'/>
        <CardList monsters={filtredMonster}/>
      </div>   
    );
  };
}

export default App;
