import React from 'react';
import Calculator from './Calculator';
import DisplayScreen from '../components/DisplayScreen';
import CalcBtns from '../components/CalcBtns';
import Button from '../components/Button';
import { shallow, mount } from 'enzyme';

describe('<Calculator />', () => {
  it('should render a <DisplayScreen /> component', () => {
    const wrapper = mount(<Calculator />);
    expect(wrapper.find(DisplayScreen).length).toBe(1);
  });


  it('should render a <CalcBtns /> component', () => {
    const wrapper = mount(<Calculator />);
    expect(wrapper.find(CalcBtns).length).toBe(1);
  });
})
