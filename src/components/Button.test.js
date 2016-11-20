import React from 'react';
import Button from '../components/Button';
import { shallow } from 'enzyme';


describe('<Button />', () => {

  it('should have defined props', () => {
    const wrapper = shallow(<Button klass="class" madeUp="notReal"/>);
    expect(wrapper.prop('klass')).toEqual('class');
    expect(wrapper.prop('madeUp')).toBeUndefined();
  })
})
