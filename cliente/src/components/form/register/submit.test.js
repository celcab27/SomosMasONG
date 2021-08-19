import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FormRegister from './FormRegister';

afterAll(cleanup);

describe('/component/form/register/submit.js - Result function is fine', () => {
  test('Click on button submit call function on props', async () => {
    const handleSubmit = jest.fn();
    render(
      <MemoryRouter>
        <FormRegister changeSubmit={handleSubmit} />
      </MemoryRouter>,
    );
    const inputFirstName = screen.getByRole('textbox', {
      name: 'First Name',
    });
    fireEvent.change(inputFirstName, {
      target: { value: 'Brendan' },
    });
    const inputLastName = screen.getByRole('textbox', {
      name: 'Last Name',
    });
    fireEvent.change(inputLastName, {
      target: { value: 'Eich' },
    });
    const inputEmail = screen.getByRole('textbox', {
      name: 'Email Address',
    });
    fireEvent.change(inputEmail, {
      target: { value: 'BrendanEich@gmail.com' },
    });
    const inputPassword = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    fireEvent.change(inputPassword, {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      expect(handleSubmit.mock.calls.length).toBe(1);
    });
  });
  test('Click on button submit call function default and fail event', async () => {
    render(
      <MemoryRouter>
        <FormRegister />
      </MemoryRouter>,
    );
    const inputFirstName = screen.getByRole('textbox', {
      name: 'First Name',
    });
    fireEvent.change(inputFirstName, {
      target: { value: 'Brendan' },
    });
    const inputLastName = screen.getByRole('textbox', {
      name: 'Last Name',
    });
    fireEvent.change(inputLastName, {
      target: { value: 'Eich' },
    });
    const inputEmail = screen.getByRole('textbox', {
      name: 'Email Address',
    });
    fireEvent.change(inputEmail, {
      target: { value: 'BrendanEich@gmail.com' },
    });
    const inputPassword = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    fireEvent.change(inputPassword, {
      target: { value: '123456' },
    });
    fireEvent.click(screen.getByRole('button'));
    await waitFor(() => {
      screen.getByText('Sorry we have a error. Contact with support, please.');
    });
  });
});
