import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import the Provider component
import { Lists } from '../../components/rockets/Lists';
import store from '../../redux/store'

  // eslint-disable-next-line no-undef
it('renders correctly', () => {
  const { container } = render(
    <Provider store={store}> {/* Wrap Lists component with Provider */}
      <BrowserRouter>
        <Lists />
      </BrowserRouter>
    </Provider>
  );
  // eslint-disable-next-line no-undef
  expect(container).toMatchSnapshot();
});
