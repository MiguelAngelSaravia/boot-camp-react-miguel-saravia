import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow ,configure } from 'enzyme';

configure({adapter: new Adapter()});

import CustomCard from './';
import AuthProvider from '../../providers/Auth';

describe('CustomCard', () => {
    const wrapper = shallow(
        <AuthProvider>
          <CustomCard
            list={jest.fn()}
            youtubeList={jest.fn()}
          />
        </AuthProvider>
      );
    
      it('Renders CustomCard', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('match snapshot CustomCard', () => {
        expect(wrapper.find('.Card')).toMatchSnapshot();
      });
});
