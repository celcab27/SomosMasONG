import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import FormRegister from './FormRegister';

beforeEach(() =>
  render(
    <MemoryRouter>
      <FormRegister />
    </MemoryRouter>,
  ),
);
afterAll(cleanup);

describe('/component/form/register/FormRegister.js - <FormRegister> - Form Register Renders', () => {
  test('Does renders Form Register', () => {
    screen.getByText('Sign UP');
    screen.getByText('First Name');
    screen.getByText('Last Name');
    screen.getByText('Email Address');
    screen.getByText('Password');
    screen.getByText('Already have an account? Sign in');
  });
});

describe('/component/form/register/FormRegister.js - <FormRegister> - Form Register Change Values', () => {
  test('Does change input first name', async () => {
    const inputFirstName = screen.getByRole('textbox', { name: 'First Name' });
    fireEvent.change(inputFirstName, {
      target: { value: 'Brendan' },
    });
    await waitFor(() => {
      expect(inputFirstName.value).toBe('Brendan');
    });
  });
  test('Does change input last name', async () => {
    const inputLastName = screen.getByRole('textbox', {
      name: 'Last Name',
    });
    fireEvent.change(inputLastName, {
      target: { value: 'Eich' },
    });
    await waitFor(() => {
      expect(inputLastName.value).toBe('Eich');
    });
  });
  test('Does change input email', async () => {
    const inputEmail = screen.getByRole('textbox', {
      name: 'Email Address',
    });
    fireEvent.change(inputEmail, {
      target: { value: 'BrendanEich@gmail.com' },
    });
    await waitFor(() => {
      expect(inputEmail.value).toBe('BrendanEich@gmail.com');
    });
  });
  test('Does change input password', async () => {
    const inputPassword = screen.getByLabelText(/Password/i, {
      selector: 'input',
    });
    fireEvent.change(inputPassword, {
      target: { value: '123456' },
    });
    await waitFor(() => {
      expect(inputPassword.value).toBe('123456');
    });
  });
});
