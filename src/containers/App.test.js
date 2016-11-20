import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Calculator from './Calculator';
import {shallow} from 'enzyme';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('renders the <Calculator />', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Calculator).length).toBe(1);
  })
})
