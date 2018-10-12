'use strict';

const store = {
  addNewItem: function (item) {
  },

  updateItem: function (item) {
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