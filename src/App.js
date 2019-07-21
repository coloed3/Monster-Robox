import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list-component";
import { SearchBox } from "./components/searchBox/searchbox.components";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }

  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filterMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="Search Monster"
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filterMonster} />
      </div>
    );
  }
}

export default App;
