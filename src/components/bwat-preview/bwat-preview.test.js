import React from 'react';
import { shallow } from 'enzyme';

import BWATPreview from './bwat-preview';

describe('<BWATPreview />', () => {
  it('Renders without crashing', () => {
    shallow(<BWATPreview />);
  });
});
