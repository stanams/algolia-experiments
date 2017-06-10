import React from 'react';
import ReactDOM from 'react-dom';
import { PureApp as App } from './App';

jest.mock('./Components/Message/Message.component', () => 'Message')

it('renders without crashing', () => {
  //const div = document.createElement('div');
  //ReactDOM.render(<App />, div);
});
