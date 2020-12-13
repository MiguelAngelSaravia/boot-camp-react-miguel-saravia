import React from 'react';
import CustomCard from './Card.component';

describe('CustomCard', () => {
  const onClickSpy = jest.fn();
  const props = Object.freeze({
    children: <div onClick={onClickSpy}>Test Footer</div>,
  });
});
