import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskCard from './TaskCard';

test('shows task title', () => {
  const task = { id: 1, title: 'Test Task', status: 'todo' };
  render(<TaskCard task={task} moveTask={() => {}} deleteTask={() => {}} />);
  
  expect(screen.getByText('Test Task')).toBeInTheDocument();
});

test('has delete button', () => {
  const task = { id: 1, title: 'Test Task', status: 'todo' };
  render(<TaskCard task={task} moveTask={() => {}} deleteTask={() => {}} />);
  
  expect(screen.getByText('×')).toBeInTheDocument();
});

test('calls deleteTask on delete click', () => {
  const deleteTask = jest.fn();
  const task = { id: 1, title: 'Test Task', status: 'todo' };
  
  window.confirm = jest.fn(() => true);
  
  render(<TaskCard task={task} moveTask={() => {}} deleteTask={deleteTask} />);
  fireEvent.click(screen.getByText('×'));
  
  expect(deleteTask).toHaveBeenCalledWith(1);
});

test('has move buttons', () => {
  const task = { id: 1, title: 'Test Task', status: 'todo' };
  render(<TaskCard task={task} moveTask={() => {}} deleteTask={() => {}} />);
  
  expect(screen.getByText('Next →')).toBeInTheDocument();
});