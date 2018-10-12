'use strict';

function createApp(props) {

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

function createInputsRow(props) {

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

  const categories = store.getData('categories');
  const shops = store.getData('shops');

  const appHost = document.getElementById('app');
  Array.prototype.forEach.call(appHost.children, x => x.remove());
  const app = createApp({ todos, categories, shops });
  app.render(appHost);
}

appStart(store.getData('todos'));