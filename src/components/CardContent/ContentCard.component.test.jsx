import React from 'react';
import {shallow} from '../../enzyme'

import CardContent from './';
import AuthProvider from '../../providers/Auth';

describe('CardContent', () => {
    const wrapper = shallow(
        <AuthProvider>
          <CardContent
          />
        </AuthProvider>
      );
    
      it('Renders CardContent', () => {
        expect(wrapper.exists()).toBe(true)
      });

      it('Return Component', () => {
        expect(wrapper.find('CardContent').length).toBe(1);
      });
});
