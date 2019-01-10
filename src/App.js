import React, { Component } from 'react';
import Header from './components/Header';
import Board from './components/Board';
import List from './components/List';
import Task from './components/Task';
import AddTask from './components/Task/AddTask';

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
