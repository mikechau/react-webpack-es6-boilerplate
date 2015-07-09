import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import Application from 'app/components/Application';

describe('Application', () => {
  it('renders a div', () => {
    const shallowRenderer = ReactTestUtils.createRenderer();
    shallowRenderer.render(<Application />);

    const component = shallowRenderer.getRenderOutput();
    expect(component.type).to.equal('div');
  });
});
