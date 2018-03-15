import React from 'react';
import { shallow } from 'enzyme';

import FormRowDisplay from './form-row-display';

describe('<FormRowDisplay />', () => {
  it('Renders without crashing', () => {
    shallow(<FormRowDisplay />);
  });
});

it('Renders the props', () => {
  const title = "Foo";
  const value = "bar";
  const wrapper = shallow(
    <FormRowDisplay title={title}  value={value}/>
  );
  expect(wrapper.prop('title')).toEqual(title);
  expect(wrapper.prop('value')).toEqual(value);
});
