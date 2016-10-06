import Test from '../../src/components/TestComp';

import React from 'react'
import expect from 'expect';
import { shallow } from 'enzyme'

function setup() {
  const enzymeWrapper = shallow(<Test />)

  return {
    enzymeWrapper
  }
}

describe('Test component', () => {
  it('simple spec', () => {
    const { enzymeWrapper } = setup();
    expect(enzymeWrapper.text()).toEqual('Test');
  });
});
