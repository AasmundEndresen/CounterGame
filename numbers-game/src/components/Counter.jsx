import React, { useReducer } from 'react';
import styled from 'styled-components';
import Operator from './Operator';
import { reducer, getRandomInt } from './functions';
import constants from './game.constants';

const Count = styled(Operator)`
    max-width: 100%;
    height: 75px;
    background-color: white;
    box-shadow: 2px 2px 8px 5px inset ${props => props.victory ? 'lightgreen' : 'lightcoral'};
`;

const initialState = {
  count: 1,
  attempts: 0,
};

const Counter = ({ className, goal }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const victory = state.count === goal;
  const almost = state.count >= (goal - Math.ceil(goal / 10)) && state.count <= (goal + Math.ceil(goal / 10)) && !victory;
  const operations = almost ? [constants.ADD, constants.SUBTRACT] : [constants.MULTIPLY, constants.DIVIDE];
  const operator = almost ? ['+', '-'] : ['x', '/'];
  const winner = constants.WINNER;
  const values = [
    getRandomInt([1, 10]),
    getRandomInt([1, 100]),
    getRandomInt([1, 100]),
    getRandomInt([1, 10]),
  ];
  return (
    <div className={className}>
      <h1>{`${victory ? `Congratulations! You won!` : ''} Your target ${victory ? 'was' : 'is'} ${goal}`}</h1>
      <p>{`${state.attempts} tries`}</p>
      <Count victory={victory} value={state.count} onClick={() => dispatch({ type: 'reset' })} />
      <div className="button-line">
        <Operator value={victory ? winner : `${operator[0]} ${values[0]}`} onClick={() => (!victory && dispatch({ type: operations[0], value: values[0] }))} />
        <Operator value={victory ? winner : `${operator[0]} ${values[1]}`} onClick={() => (!victory && dispatch({ type: operations[0], value: values[1] }))} />
        <Operator value={victory ? winner : `${operator[1]} ${values[2]}`} onClick={() => (!victory && dispatch({ type: operations[1], value: values[2] }))} />
        <Operator value={victory ? winner : `${operator[1]} ${values[3]}`} onClick={() => (!victory && dispatch({ type: operations[1], value: values[3] }))} />
      </div>
    </div>
  )
}

export default styled(Counter)`
    max-width: 768px;
    width: 100%;
    box-sizing: border-box;
    background-color: whitesmoke;
    padding: 16px;
    border-radius: 4px;
    box-shadow: 2px 2px 8px 5px gray;
    h1 {
        text-align: left;
        border-bottom: 1px dotted lightcoral;
        padding-bottom: 10px;
    }
    .button-line {
        padding: 15px 0px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        border-bottom: 3px dotted lightcoral;
        border-radius: 16px;
    }
`;