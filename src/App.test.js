import React from 'react';
import { render, screen } from "@testing-library/react";
import App from './App';
import * as axios from 'axios';

jest.mock("axios");

describe('App', () => {
  test('Renders user list', async () => {
    axios.mockResolvedValue({ data:
      [
        {
          id: 1,
          name: 'James Bond',
          email: '007@MI6.co.uk',
          company: {
            name: 'MI6',
          },
        },
      ]
    });

    render(<App />);

    screen.findByText('List of Users');
    screen.findByText(/James Bond/i,);
  })
});