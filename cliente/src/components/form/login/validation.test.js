import validation from './validation';

describe('/component/form/login/validation.js - Result function are fine', () => {
  test('Is validation have a correct params', () => {
    const result = validation({
      email: 'fine@gmail.com',
      password: '123456',
    });
    expect(result).toStrictEqual({});
  });
  test('Is validation have wrong params', () => {
    const result = validation({
      email: 'finegmailcom',
      password: '1256',
    });
    expect(result).not.toStrictEqual({});
  });
});
