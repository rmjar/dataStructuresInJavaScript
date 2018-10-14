const obj = {
  'user1': ['Jan', 'Kowalski'],
  'user2': ['Monika', 'Nowak'],
  'user3': ['Krzysztof', 'Dąbek'],
  'user4': ['Marianna', 'Fiołek'],
  'user5': ['Zuzanna', 'Tata']
};


const values = Object.values(obj)
.map(val => ({firstName: val[0], lastName: val[1]}))
.forEach(x => console.log(x.firstName, x.lastName));