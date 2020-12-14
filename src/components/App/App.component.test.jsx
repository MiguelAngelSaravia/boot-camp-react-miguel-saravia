import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow ,configure } from 'enzyme';

configure({adapter: new Adapter()});

import App from './';
import AuthProvider from '../../providers/Auth';

describe('App', () => {
    const wrapper = shallow(
        <AuthProvider>
          <App
          />
        </AuthProvider>
      );
    
      it('Renders App', () => {
        expect(wrapper.exists()).toBe(true)
      });
});
