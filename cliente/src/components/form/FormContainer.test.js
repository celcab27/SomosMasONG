import { render, screen, cleanup } from '@testing-library/react';
import FormContainer from './FormContainer';

afterAll(cleanup);

describe('/component/form/FormContainer.js - <FormContainer> - Form Container Renders', () => {
  test('Does renders Form Container', () => {
    const title = 'My New Form';
    render(
      <FormContainer titleForm={title}>
        <h1>Example</h1>
      </FormContainer>,
    );
    screen.getByText(title);
  });
});
