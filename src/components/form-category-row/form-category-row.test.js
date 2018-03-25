import React from 'react';
import { shallow } from 'enzyme';

import FormCategoryRow from './form-category-row';

describe('<FormCategoryRow />', () => {
  it('Renders without crashing', () => {
    shallow(<FormCategoryRow />);
  });

  it('Renders the title', () => {
    const wrapper = shallow(
      <FormCategoryRow title='Foo' />
    );
    //console.log(wrapper.find('title').text());
    //expect(wrapper.prop('title')).toEqual('Foo');
    //expect(wrapper.find('Title').text().toEqual('Foo'));
    expect(wrapper.contains('Foo')).toEqual(true);
  });
});
