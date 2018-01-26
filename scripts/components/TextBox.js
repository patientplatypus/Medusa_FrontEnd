import React, { Component } from 'react';
import { connect } from 'react-redux'
import { textCHANGE } from '../Redux/actions'
import '../theme/main.less'


class TextBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localtext: 'Click Here to Change Text',
      reduxtext: 'Click Here to Change Text'
    };

    this.props.store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), we will update local component state and force component to rerender with new data.
      this.setState({
        reduxtext: this.props.store.getState().text
      });
    });
  }

  valuehandler(currentvalue){
    if(this.state.localtext!==currentvalue){
      return this.state.localtext
    }else{
      return currentvalue;
    }
  }

  render() {
    return (
      <div>
        <div className="contentStyles">
          Current text value: {this.state.reduxtext}
        </div>
        <form onClick={()=>{this.setState({localtext: ''})}}>
          <textarea value={this.state.localtext} onChange={(e)=>{
              this.setState({
                localtext: e.target.value
              }, ()=>{
                this.props.store.dispatch(textCHANGE(this.state.localtext))
              })
            }
          }>
          </textarea>
        </form>
      </div>
    );
  }
};

TextBox = connect()(TextBox)

export default TextBox
