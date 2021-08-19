import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import FormLogin from './FormLogin';

beforeEach(() =>
  render(
    <MemoryRouter>
      <FormLogin />
    </MemoryRouter>,
  ),
);
afterAll(cleanup);

describe('/component/form/login/FormLogin.js - <FormLogin> - Form Login Renders', () => {
  test('Does renders Form Login', () => {
    screen.getByText('Sign IN');
    screen.getByText('Email Address');
    screen.getByText('Password');
    screen.getByText("Don't have an account? Sign Up");
  });
});

describe('/component/form/login/FormLogin.js - <FormLogin> - Form Login Change Values', () => {
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
