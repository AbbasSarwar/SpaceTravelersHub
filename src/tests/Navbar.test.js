import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import store from '../redux/store';
import { it, expect } from '@jest/globals';

it('renders correctly', () => {

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
