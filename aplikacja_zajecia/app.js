'use strict';

function createApp(props) {

  return {
    render: function (host) {
    }
  }
}

function createInputsRow(props) {

  return {
    render: function (host) {
    }
  }
}

function createMultiactions() {

  return {
    render: function (host) {
    }
  }
}

function createList(props) {

  return {
    render: function (host) {
    }
  }
}

function createListItem(props) {

  return {
    render: function (host) {
    }
  }
}

function appStart(todos) {
  if (store.getData('categories').length === 0) {
    store.setData('categories', ['', 'warzywa i owoce', 'napoje', 'pieczywo']);
  }
  if (store.getData('shops').length === 0) {
    store.setData('shops', ['Społem', 'Lidl', 'Żabka', 'Warzywniak']);
  }
  if (store.getData('todos').length === 0) {
    store.setData('todos', [
      { name: 'ziemniaki', category: 'warzywa i owoce', shops: ['Społem', 'Warzywniak'], checked: false },
      { name: 'muszynianka', category: 'napoje', shops: ['Społem'], checked: false },
      { name: 'jabłka', category: 'warzywa i owoce', shops: ['Lidl', 'Warzywniak'], checked: false },
      { name: 'chleb', category: 'pieczywo', shops: ['Lidl'], checked: true },
      { name: 'cola', category: 'napoje', shops: ['Społem', 'Żabka'], checked: false },
      { name: 'brokuły', category: 'warzywa i owoce', shops: ['Warzywniak'], checked: false },
    ]);
  }

  const categories = store.getData('categories');
  const shops = store.getData('shops');

  const appHost = document.getElementById('app');
  Array.prototype.forEach.call(appHost.children, x => x.remove());
  const app = createApp({ todos, categories, shops });
  app.render(appHost);
}

appStart(store.getData('todos'));