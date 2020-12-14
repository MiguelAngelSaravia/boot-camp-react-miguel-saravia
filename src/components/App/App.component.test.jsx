import React from 'react';
import {shallow} from '../../enzyme'
import App from './';
import AuthProvider from '../../providers/Auth';

describe('App', () => {
    const wrapper = shallow(
        <AuthProvider>
          <App/>
        </AuthProvider>
      );
    
      it('Renders App', () => {
        expect(wrapper.exists()).toBe(true)
      });
      it("Find Component", () => {
        expect(wrapper.find('App').length).toBe(1);
      });
      it("Snapshot Component", () => {
        expect(wrapper.find('App').length).toMatchSnapshot();
      });
});
