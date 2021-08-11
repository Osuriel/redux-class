import React from 'react';
import { Component } from 'react';
import { useSelector } from 'react-redux';
import colorProviderHOC from '../hoc/colorProviderHOC';
import quoteProviderHOC from '../hoc/quoteProviderHOC';

class NewStuff extends Component {
  // ITs huge with lots of code.
  // ITs huge with lots of code.
  // ITs huge with lots of code.
  // ITs huge with lots of code.
  // ITs huge with lots of code.
  // ITs huge with lots of code.
  // ITs huge with lots of code.
  
  
  render(){
    console.log('newStuff props: ', this.props)
    const { quote } = this.props;
    const color = 'blue';
    return (
      <div style={{ padding: '30px 0', border: `1px solid ${color}` }}>
        <h2>new stuff</h2>
        <h2>quote again:</h2>
        <h2>{quote}</h2>
      </div>
    )
  }
}



export default quoteProviderHOC(NewStuff);