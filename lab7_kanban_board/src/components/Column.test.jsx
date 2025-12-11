import React from 'react';
import { render, screen } from '@testing-library/react';
import Column from './Column';

test('shows column title', () => {
  render(<Column title="To Do" tasks={[]} status="todo" moveTask={() => {}} deleteTask={() => {}} />);
  expect(screen.getByText('To Do')).toBeInTheDocument();
});

test('shows task count', () => {
  const tasks = [
    { id: 1, title: 'Task 1', status: 'todo' },
    { id: 2, title: 'Task 2', status: 'todo' },
  ];
  
  render(<Column title="To Do" tasks={tasks} status="todo" moveTask={() => {}} deleteTask={() => {}} />);
  expect(screen.getByText('2 tasks')).toBeInTheDocument();
});

test('shows tasks in column', () => {
  const tasks = [
    { id: 1, title: 'Task 1', status: 'todo' },
  ];
  
  render(<Column title="To Do" tasks={tasks} status="todo" moveTask={() => {}} deleteTask={() => {}} />);
  expect(screen.getByText('Task 1')).toBeInTheDocument();
});

test('shows empty message', () => {
  render(<Column title="To Do" tasks={[]} status="todo" moveTask={() => {}} deleteTask={() => {}} />);
  expect(screen.getByText(/No tasks here yet/i)).toBeInTheDocument();
});