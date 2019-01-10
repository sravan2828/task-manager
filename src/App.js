import React, { Component } from 'react';
import Header from './Header';
import Board from './Board';
import List from './List';
import Task from './Task';
import AddTask from './Task/AddTask';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Board>
          <List>
            <Task priority="low" />
            <Task priority="medium" />
            <Task priority="high" />
            <AddTask />
          </List>
          <List>
            <Task priority="high" />
            <Task priority="high" />
            <Task priority="medium" />
            <Task priority="low" />
            <Task priority="low" />
            <Task priority="high" />
            <Task priority="low" />
            <AddTask />
          </List>
          <List>
            <Task priority="low" />
            <Task priority="medium" />
            <Task priority="high" />
            <AddTask />
          </List>
          <List>
            <Task priority="low" />
            <Task priority="medium" />
            <Task priority="high" />
            <AddTask />
          </List>
          <List>
            <Task priority="low" />
            <Task priority="medium" />
            <Task priority="high" />
            <AddTask />
          </List>
          <List>
            <Task priority="low" />
            <Task priority="medium" />
            <Task priority="high" />
            <AddTask />
          </List>
        </Board>
      </div>
        );
  }
}

export default App;
