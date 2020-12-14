import React from 'react';
import {shallow} from '../../enzyme'

import DrawerMenu from './';
import AuthProvider from '../../providers/Auth';

describe('DrawerMenu', () => {
    const wrapper = shallow(
        <AuthProvider>
          <DrawerMenu
          />
        </AuthProvider>
      );
    
      it('Renders DrawerMenu', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('Return DrawerMenu', () => {
        expect(wrapper.find('DrawerMenu').length).toBe(1);
      });
});
