import React from 'react';
import { Component } from 'react';
import { useSelector, connect } from 'react-redux';
import colorProviderHOC from '../hoc/colorProviderHOC';
import quoteProviderHOC from '../hoc/quoteProviderHOC';

class NewStuff extends Component {  
  render(){
    console.log('newStuff props: ', this.props)
    const { quote } = this.props;
    const color = 'blue';
    this.props.dispatch({type: 'random just testing'})
    return (
      <div style={{ padding: '30px 0', border: `1px solid ${color}` }}>
        <h2>new stuff</h2>
        <h2>quote again:</h2>
        <h2>{quote}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chicken: "chick fil a",
    random:"text",
    quote: state.shoppingCart.quote,
  }
};

// // 1. we get a HOC
// const reduxHOC = connect(mapStateToProps);
// // 2. we use that HOC
// export default reduxHOC(NewStuff);

export default connect(mapStateToProps)(NewStuff);
