import {
  makeGET,
  makePOST,
  makePUT,
  makePATCH,
  makeDELETE,
} from 'services/httpRequest';

describe('/services/httpRequest.js - Function work', () => {
  test('Does function makeGET working', async () => {
    const result = await makeGET(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    expect(result).toHaveProperty('id', 1);
  });
  test('Does function makePOST working', async () => {
    const result = await makePOST(
      'https://jsonplaceholder.typicode.com/posts',
      {
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    );
    expect(result).toHaveProperty('userId', 1);
  });
  test('Does function makePUT working', async () => {
    const result = await makePUT(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
      },
    );
    expect(result).toHaveProperty('userId', 1);
  });
  test('Does function makePATCH working', async () => {
    const result = await makePATCH(
      'https://jsonplaceholder.typicode.com/posts/1',
      {
        title: 'foo',
      },
    );
    expect(result).toHaveProperty('title', 'foo');
  });
  test('Does function makeDELETE working', async () => {
    const result = await makeDELETE(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    expect(result).toStrictEqual({});
  });
});
