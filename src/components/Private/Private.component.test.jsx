import React from 'react';
import {shallow} from '../../enzyme'

import Private from './';
import AuthProvider from '../../providers/Auth';

describe('FavoritesCard', () => {
    const wrapper = shallow(
        <AuthProvider>
          <Private
          />
        </AuthProvider>
      );
    
      it('Renders Private', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('Return Private', () => {
        expect(wrapper.find('Private').length).toBe(1);
      });
});
