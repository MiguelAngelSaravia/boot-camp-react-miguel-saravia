import React from 'react';
import {shallow} from '../../enzyme'

import FavoritesCard from './';
import AuthProvider from '../../providers/Auth';

describe('FavoritesCard', () => {
    const wrapper = shallow(
        <AuthProvider>
          <FavoritesCard
          />
        </AuthProvider>
      );
    
      it('Renders FavoritesCard', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('Return FavoritesCard', () => {
        expect(wrapper.find('FavoritesCard').length).toBe(1);
      });
});
