import React from 'react';
import { shallow } from 'enzyme';

import FormRowDisplay from './form-row-display';

describe('<FormRowDisplay />', () => {
  it('Renders without crashing', () => {
    shallow(<FormRowDisplay />);
  });

  it('Renders the props', () => {
    const wrapper = shallow(
      <FormRowDisplay title='Foo'  value='bar'/>
    );
    console.log(wrapper.prop('title'));
    expect(wrapper.prop('title')).toEqual('Foo');
    expect(wrapper.prop('value')).toEqual('bar');
  });
});
