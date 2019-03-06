import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <Counter goal={Math.floor(Math.random(1, 1000) * 1000)} />
      </div>
    );
  }
}

export default styled(App)`
  padding-top: 150px;
  display: flex;
  justify-content: center;
  width: 100%;
`;
