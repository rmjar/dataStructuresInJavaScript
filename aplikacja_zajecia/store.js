'use strict';

const store = {
  addNewItem: function (item) {
    const todos = this.getData('todos'); // todos == []
    todos.push(item);
    this.setData('todos', todos);
    appStart(todos);
  },

  updateItem: function (item) {
    const todos = this.getData('todos');

    const it = todos.find(x => x.name === item.name);
    it.checked = props.checked;

    this.setData('todos', todos);
    appStart(todos);
  },

  deleteItem: function (item) {
  },

  checkAll: function () {
  },

  uncheckAll: function () {
  },

  switchSelection: function () {
  },

  deleteAll: function () {
  },

  deleteBought: function () {
  },

  filterItems: function (filter) {
  },

  sort: function (prop) {
  },

  getData: function (key) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  },

  setData: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}