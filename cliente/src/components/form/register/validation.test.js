import validation from './validation';

describe('/component/form/register/validation.js - Result function are fine', () => {
  test('Is validation have a correct params', () => {
    const result = validation({
      firstName: 'Fine',
      lastName: 'Name',
      email: 'fine@gmail.com',
      password: '123456',
    });
    expect(result).toStrictEqual({});
  });
  test('Is validation have wrong params', () => {
    const result = validation({
      firstName: 'F',
      lastName: 'N',
      email: 'finegmailcom',
      password: '1256',
    });
    expect(result).not.toStrictEqual({});
  });
});
