'use strict';

const store = {
  // funkcja wywoływana na zdarzenie kliknięcia [V zatwierdź] 
  // w sekcji 'nowy produkt'
  addNewItem: function (item) {
    const todos = this.getData('todos');
    item.checked = false;
    todos.push(item);

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia checkboxa [ ] lub [X] 
  // na elemencie listy 'do kupienia' i 'kupione'
  updateItem: function (item) {
    const todos = this.getData('todos');

    const foundItem = todos.find(x => x.name === item.name);
    foundItem.checked = item.checked;

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia usuń [X] 
  // na elemencie listy 'do kupienia' i 'kupione'
  deleteItem: function (item) {
    // znajdź element item w tablicy todos i go usuń z tablicy
    // item ma strukturę: {name: string, category: string, shops: [string]}
    const todos = this.getData('todos');

    // implementacja
    const foundItem = todos.find(x => x.name === item.name);
    const itemIndex = todos.indexOf(foundItem)
    todos.splice(itemIndex, 1);

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia przycisku [zaznacz wszystkie]
  // w sekcji 'multiakcje'
  checkAll: function () {
    // zmień właściwość checked wszystkich obiektów tablicy todos na true
    const todos = this.getData('todos');

    // implementacja
    todos.forEach(e => {
      e.checked = true;
    });

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia przycisku [odznacz wszystkie]
  // w sekcji 'multiakcje'
  uncheckAll: function () {
    // zmień właściwość checked wszystkich obiektów tablicy todos na false
    const todos = this.getData('todos');

    // implementacja
    todos.forEach(element => {
      element.checked = false;
    });

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia przycisku [zamień zaznaczenie]
  // w sekcji 'multiakcje'
  switchSelection: function () {
    // przełącz właściwość checked wszystkich obiektów tablicy todos
    // true zamień na false, a false na true
    const todos = this.getData('todos');

    // implementacja
    todos.forEach(element => {
      element.checked = !element.checked;
    });

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia przycisku [usuń wszystkie]
  // w sekcji 'multiakcje'
  deleteAll: function () {
    // usuń wszystkie elementy tablicy todos
    const todos = this.getData('todos');

    // implementacja
    todos.length = 0;

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja wywoływana na zdarzenie kliknięcia przycisku [usuń kupione]
  // w sekcji 'multiakcje'
  deleteBought: function () {
    // usuń elementy tablicy todos, które spełniają warunek checked === true
    let todos = this.getData('todos');

    // implementacja
    const foundItems = todos.filter(x => !x.checked);

    this.setData('todos', foundItems);
    appStart(foundItems);
  },

  // funkcja wywoływana na zdarzenie kliknięcia [V zatwierdź] 
  // w sekcji 'filtry'
  filterItems: function (filter) {
    // przefiltruj tablicę todos względem obiektu wejściowego filter
    // obiekt filter ma strukturę: { name: string, category: string, shops: [string] }
    // żeby sprawdzić czy waunek dla shops jest prawdziwy sprawdź, czy jakikolwiek
    // przesłany element znajduje się w obiekcie tabeli todos (funkcja some) 
    const todos = this.getData('todos');

    // implementacja
    const filteredItems = todos
      .filter(x => !filter.name || x.name.indexOf(filter.name) < 0) //jeśli filtr pusty działa pierwsza część z negacją, jeśli wypełniony - sprawdza
      .filter(x => filter.category !== "" ? x.category === filter.category : true)
      .filter(x => filter)

    appStart(filteredItems);
  },

  // funkcja wywoływana na zdarzenie kliknięcia przycisku [sortuj po nazwie],
  // [sortuj po kategorii] i [sortuj po sklepach] w sekcji 'multiakcje'
  sort: function (prop) {
    // posortuj tablicę todos względem parametru przekazanego w atrybucie prop
    // props == 'name' || 'category' || 'shops'
    const todos = this.getData('todos');

    // implementacja

    this.setData('todos', todos);
    appStart(todos);
  },

  // funkcja pobierająca dane o podanym kluczu
  // dostępne klucze: 'todos', 'categories', shops'
  getData: function (key) {
    return JSON.parse(localStorage.getItem(key) || '[]')
  },

  // funkcja aktualizująca dane o podanym kluczu i wartości
  // dostępne klucze: 'todos', 'categories', shops'
  // przyjmowane wartości: tablice danych:
  // categories: tablica stringów
  // shops: tablica stringów
  // todos: tablica obiektów o strukturze: 
  // {
  //   checked: boolean,
  //   name: string,
  //   category: string z dostępnych w tablicy categories
  //   shops: tablica stringów z dostępnych w tablicy shops
  // }
  setData: function (key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}