
import React, { Component } from 'react';
import {CardList } from './components/card-list/card-list-component';

const style = {

  container: {
     textAlign: 'center'
  }
}

class App extends Component {
  
  constructor(){
    super();

    this.state={
      monsters: []
    }
  }

 

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users").then(response => 
      response.json())
      .then(users => this.setState({monsters: users}));
      
  }
  
  render() {
    return (
      <div style={style.container}>
      <CardList monsters= {this.state.monsters}/>
       
      </div>
    );
  }
}

export default App;