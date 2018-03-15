import React from 'react';
import { shallow } from 'enzyme';

import FormCategoryRow from './form-category-row';

describe('<FormCategoryRow />', () => {
  it('Renders without crashing', () => {
    shallow(<FormCategoryRow />);
  });

  it('Renders the title', () => {
    const title = "Foo";
    const wrapper = shallow(
      <FormCategoryRow title={title} />
    );
    expect(wrapper.prop('title')).toEqual(title);
  });
});
