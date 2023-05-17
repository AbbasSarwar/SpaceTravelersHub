import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { MissionsTable } from '../../components/missions/MissionsTable';
import store from '../../redux/store';

it('renders correctly', () => {
  const missions = [
    { id: 1, mission_name: 'Mission 1', description: 'Description 1', reserved: true },
    { id: 2, mission_name: 'Mission 2', description: 'Description 2', reserved: false },
    // Add more mission objects as needed
  ];

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <MissionsTable missions={missions} />
      </BrowserRouter>
    </Provider>
  );

  expect(container).toMatchSnapshot();
});
