'use strict';

const store = {
  addNewItem: function (item) {
    const todos = this.getData('todos');
    todos.push(item);

    this.setData('todos', todos);
    appStart(todos);
  },

  updateItem: function (item) {
    const todos = this.getData('todos');
    const indexOfItem = todos.indexOf(todos.find(x => x.name === item.name));
    todos[indexOfItem] = item;

    this.setData('todos', todos);
    appStart(todos);
  },

  deleteItem: function (item) {
    const todos = this.getData('todos');
    const indexOfItem = todos.indexOf(todos.find(x => x.name === item.name));
    todos.splice(indexOfItem, 1);

    this.setData('todos', todos);
    appStart(todos);
  },

  checkOrUncheckAll: function (check) {
    const todos = this.getData('todos')
      .map(x => {
        const item = { ...x };
        item.checked = check;
        return item;
      });

    this.setData('todos', todos);
    appStart(todos);
  },

  checkAll: function () {
    this.checkOrUncheckAll(true);
  },

  uncheckAll: function () {
    this.checkOrUncheckAll(false);
  },

  switchSelection: function () {
    const todos = this.getData('todos')
      .map(x => {
        const item = { ...x };
        item.checked = !item.checked;
        return item;
      });

    this.setData('todos', todos);
    appStart(todos);
  },

  deleteAll: function () {
    this.setData('todos', []);
    appStart([]);
  },

  deleteBought: function () {
    const todos = this.getData('todos').filter(x => !x.checked);

    this.setData('todos', todos);
    appStart(todos);
  },

  filterItems: function (filter) {
    const todos = this.getData('todos')
      .filter(item => !filter.name || item.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1)
      .filter(item => !filter.category || item.category === filter.category)
      .filter(item => !filter.shops || filter.shops.length === 0 || item.shops.some(s => filter.shops.find(f => f === s)));

    appStart(todos);
  },

  sort: function (prop) {
    const todos = this.getData('todos')
      .sort((a, b) => a[prop].toString().localeCompare(b[prop].toString()));

    this.setData('todos', todos);
    appStart(todos);
  },

  getData: function (key) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  },

  setData: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}