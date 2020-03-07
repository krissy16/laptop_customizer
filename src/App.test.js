import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const FEATURES = {
  Processor: [
    {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    }
  ]
};

describe('App component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App features={FEATURES}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});