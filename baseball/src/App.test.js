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

test('ball is found', () => {
  const { getAllByText } = render(<Dashboard />);
  getAllByText(/ball/i);
});

test('foul is found', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/foul/i);
});

test('hit is found', () => {
  const { getByText } = render(<Dashboard />);
  getByText(/hit/i);
});

















