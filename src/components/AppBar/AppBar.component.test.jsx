import React from 'react';
import {shallow} from '../../enzyme'

import CustomAppBar from './';
import AuthProvider from '../../providers/Auth';

describe('CustomAppBar', () => {
    const wrapper = shallow(
        <AuthProvider>
          <CustomAppBar
          />
        </AuthProvider>
      );
    
      it('Renders CustomAppBar', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('match snapshot CustomAppBar', () => {
        expect(wrapper.find('CustomAppBar')).toMatchSnapshot();
      });

      it('Return Component', () => {
        expect(wrapper.find('CustomAppBar').length).toBe(1);
      });
});
