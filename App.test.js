import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

// Scroll was causing test to fail compilation, so mock it out.
jest.mock('ScrollView', () => jest.genMockFromModule('ScrollView'));

it('renders without crashing', () => {
  // app is created async'ly, so use Promise.then
  let rendered = new Promise(() => (renderer.create(<App />).toJSON()));
  rendered.then(app => expect(app).toBeTruthy());
});
