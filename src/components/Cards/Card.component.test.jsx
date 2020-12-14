import React from 'react';
import {shallow} from '../../enzyme';

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
        expect(wrapper.find('CustomCard')).toMatchSnapshot();
      });

      it('Return Component', () => {
        expect(wrapper.find('CustomCard').length).toBe(1);
      });
});
