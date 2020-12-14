import React from 'react';
import {shallow} from '../../enzyme'

import MenuProfile from './';
import AuthProvider from '../../providers/Auth';

describe('FavoritesCard', () => {
    const wrapper = shallow(
        <AuthProvider>
          <MenuProfile
          />
        </AuthProvider>
      );
    
      it('Renders MenuProfile', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('Return MenuProfile', () => {
        expect(wrapper.find('MenuProfile').length).toBe(1);
      });
});
