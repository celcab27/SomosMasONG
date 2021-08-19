import {
  validationFirstName,
  validationLastName,
  validationEmail,
  validationPassword,
} from './utilValidation';

describe('/component/form/utilValidation.js - Singles validations are okey', () => {
  test('Is validationFirstName working', () => {
    expect(validationFirstName('Brendam')).toBe(undefined);
    expect(validationFirstName()).toBe('Required');
    expect(validationFirstName('B')).toBe('Must be 2 characters or more.');
    expect(validationFirstName('E'.repeat(19))).toBe(
      'Must be 18 characters or less.',
    );
  });
  test('Is validationLastName working', () => {
    expect(validationLastName('Brendam')).toBe(undefined);
    expect(validationLastName()).toBe('Required');
    expect(validationLastName('B')).toBe('Must be 2 characters or more.');
    expect(validationLastName('E'.repeat(19))).toBe(
      'Must be 18 characters or less.',
    );
  });
  test('Is validationEmail working', () => {
    expect(validationEmail('Brendam@gmail.com')).toBe(undefined);
    expect(validationEmail()).toBe('Required');
    expect(validationEmail('E'.repeat(64) + 'Brendam@gmail.com')).toBe(
      'Must be 64 characters or less.',
    );
  });
  test('Is validationPassword working', () => {
    expect(validationPassword('123456')).toBe(undefined);
    expect(validationPassword()).toBe('Required');
    expect(validationPassword('12345')).toBe('Must be 6 characters or more.');
    expect(validationPassword('E'.repeat(33))).toBe(
      'Must be 32 characters or less.',
    );
  });
});
