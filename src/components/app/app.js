import React from 'react';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';

import './app.css';

const App = () => {

  const todoData = [
    { id: 1, label: 'Drink Coffee', important: false },
    { id: 2, label: 'Make awesome app', important: true },
  ];

  return (
    <div className="wrapper">
      <AppHeader toDo={3} done={1} />
      <div className="todo__panel">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  )
}

export default App;