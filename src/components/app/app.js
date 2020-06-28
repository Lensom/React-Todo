import React, { Component } from 'react';

import TodoList from '../todo-list';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Make awesome app', important: true },
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);

      const newArray =  [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray
      }
    })
  };

  additem = (text) => {
    //  generate id ?
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    }

    this.setState(({ todoData }) => {
      const newArr = [
        ...todoData,
        newItem
      ]
      return {
        todoData: newArr
      }
    })


  }

  onToggleImportant = (id) => {
    console.log('asd')
  }

  onToggleDone = (id) => {
    console.log('as1d')
  }

  render() {
    return (
      <div className="wrapper">
        <AppHeader toDo={3} done={1} />
        <div className="todo__panel">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} onToggleImportant={this.onToggleImportant} onToggleDone={this.onToggleDone} />
        <ItemAddForm onItemAdded={this.additem}/>
      </div>
    )
  }
};