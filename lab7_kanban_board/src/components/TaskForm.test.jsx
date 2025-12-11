import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

test('has input and button', () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);
  
  expect(screen.getByPlaceholderText(/What needs to be done/i)).toBeInTheDocument();
  expect(screen.getByText('Add Task')).toBeInTheDocument();
});

test('calls addTask on submit', () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);
  
  const input = screen.getByPlaceholderText(/What needs to be done/i);
  const button = screen.getByText('Add Task');
  
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(addTask).toHaveBeenCalledWith('New Task');
});

test('clears input after submit', () => {
  const addTask = jest.fn();
  render(<TaskForm addTask={addTask} />);
  
  const input = screen.getByPlaceholderText(/What needs to be done/i);
  const button = screen.getByText('Add Task');
  
  fireEvent.change(input, { target: { value: 'New Task' } });
  fireEvent.click(button);
  
  expect(input.value).toBe('');
});