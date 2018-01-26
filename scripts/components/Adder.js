import React, { Component } from 'react';
import { connect } from 'react-redux'
import { counterADD, counterSUBTRACT } from '../Redux/actions'


class Adder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter:0,
    };

    this.props.store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      this.setState({
        counter: this.props.store.getState().counter
      });
    });
  }

  render() {
    return (
      <div>
      Current counter value: {this.state.counter}
                <div><button onClick={(e) => this.props.store.dispatch(counterADD())}>Increment</button></div>
                <div><button onClick={(e) => this.props.store.dispatch(counterSUBTRACT())}>Decrement</button></div>
      </div>
    );
  }
};

Adder = connect()(Adder)

export default Adder
