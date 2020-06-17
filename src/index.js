import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/todo-list';
import SearchPanel from './components/search-panel';
import AppHeader from './components/app-header';


const App = () => {

  const todoData = [
    {id: 1, label: 'Drink Coffee', important: false},
    {id: 2, label: 'Make awesome app', important: true},
  ];

  return (
    <div>
      <AppHeader/>
      <SearchPanel />
      <TodoList todos={ todoData }/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))