import React from 'react';

describe('CustomCard', () => {
  const onClickSpy = jest.fn();
  const props = Object.freeze({
    children: <div onClick={onClickSpy}>Test Footer</div>,
  });
});
