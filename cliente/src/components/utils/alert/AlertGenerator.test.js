import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import AlertGenerator from './AlertGenerator';

afterAll(cleanup);

describe('/component/utils/alert/AlertGenerator.js - <AlertGenerator> - Alerts Renders', () => {
  test('Does renders alert', () => {
    const text = 'My New Alert';
    render(<AlertGenerator contentText={text} />);
    screen.getByText(text);
  });
  test('Does renders alert error', () => {
    render(<AlertGenerator />);
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-standardError');
  });
  test('Does renders alert warning', () => {
    render(<AlertGenerator severity='warning' />);
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-standardWarning');
  });
  test('Does renders alert info', () => {
    render(<AlertGenerator severity='info' />);
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-standardInfo');
  });
  test('Does renders alert success', () => {
    render(<AlertGenerator severity='success' />);
    expect(screen.getByRole('alert')).toHaveClass('MuiAlert-standardSuccess');
  });
});
