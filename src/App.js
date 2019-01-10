import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import BoardContainer from "./containers/BoardContainer";
import Reducer from './redux/Reducer';

const store = createStore(Reducer);
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="container">
        <Header />
        <BoardContainer/>
      </div>
      </Provider>
    );
  }
}

export default App;
