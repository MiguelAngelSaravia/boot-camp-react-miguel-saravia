import React from 'react';
import {shallow} from '../../enzyme'

import SideCard from './';
import AuthProvider from '../../providers/Auth';

describe('SideCard', () => {
    const wrapper = shallow(
        <AuthProvider>
          <SideCard
          />
        </AuthProvider>
      );
    
      it('Renders SideCard', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('Return Private', () => {
        expect(wrapper.find('SideCard').length).toBe(1);
      });
});
