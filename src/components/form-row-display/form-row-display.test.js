import React from 'react';
import { shallow } from 'enzyme';

import FormRowDisplay from './app';

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
  expect(wrapper.contains(<div><Label>{title}</Label><Input><Value></Value>{value}</Input></div>)).toEqual(true);
});
