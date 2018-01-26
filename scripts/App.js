import React from 'react';
import PropTypes from 'prop-types';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducersCombined from './Redux/reducers'
import Adder from './components/Adder'
import TextBox from './components/TextBox'

import { Button, Icon } from 'antd';

let store = createStore(reducersCombined)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      clicks: 0
    };
  }

  render() {

    return (
      <Provider store={store}>
        <div>
          <h1>Hello there sailor</h1>
          <Button
            type="primary"
            icon="check"
            onClick={() => {
              this.setState({
                clicks: this.state.clicks + 1
              });
            }}>
              Click me
          </Button>
          <h2>{this.state.clicks} click{this.state.clicks == 1 ? '' : 's'}</h2>
          <div>
            <h1>
              Adder Component
            </h1>
            <br/>
            <Adder store={store}/>
          </div>
          <div>
            <h1>
              Text Box Component
            </h1>
            <br/>
            <TextBox store={store}/>
          </div>
        </div>
      </Provider>
    );
  }
}


export default App;
