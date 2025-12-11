import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('shows app title', () => {
  render(<App />);
  expect(screen.getByText(/TaskFlow/i)).toBeInTheDocument();
});

test('has three columns', () => {
  render(<App />);
  expect(screen.getByText('To Do')).toBeInTheDocument();
  expect(screen.getByText('In Progress')).toBeInTheDocument();
  expect(screen.getByText('Done')).toBeInTheDocument();
});

test('can add new task', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/What needs to be done/i);
  const button = screen.getByText('Add Task');
  
  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(button);
  
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});