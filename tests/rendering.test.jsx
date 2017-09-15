import React from 'react';
import ReactDOM from 'react-dom';
import TwitterLogin from 'TwitterLogin';

describe('TwitterLogin', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TwitterLogin/>, div);
  });
});
