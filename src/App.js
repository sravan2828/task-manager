import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import BoardContainer from "./containers/BoardContainer";
import Reducer from './redux/Reducer';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const store = createStore(Reducer);
class App extends Component {
  render() {
    return (
      // wrap the app with redux store provider
      <Provider store={ store }>
        {/* wrap the app with drap and drop context provider */}
        <DragDropContextProvider backend={HTML5Backend}>
          <div className="container">
            <Header />
            <BoardContainer/>
          </div>
        </DragDropContextProvider>
      </Provider>
    );
  }
}

export default App;
