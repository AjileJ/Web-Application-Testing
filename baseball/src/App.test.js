import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addOne} from './Dashboard';
import Dashboard from './Dashboard';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('addOne adds 1 strike to the current strike count', ()=> {
  let actual;
  let expected;
  actual = addOne(5);
  expected = 6;
  expect(actual).toBe(expected);

})


test('strike id found', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/strike/i);
});

test('ball id found', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/ball/i);
});

test('foul is found', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/foul/i);
});

test('hit is found', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/hit/i);
});
















// test('addTouchdown adds 7 points to the current score', () => {
//   let actual;
//   let expected;
//   actual = addTouchdown(10);
//   expected = 17;
//   expect(actual).toBe(expected);
//   expect(actual).not.toBe(13);


