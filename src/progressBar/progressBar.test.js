import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './progressBar';

describe('<ProgressBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<ProgressBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
