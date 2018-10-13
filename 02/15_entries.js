const obj = {
  name: "Mayer Aguirre",
  age: 30,
  tags: ['officia', 'proident', 'commodo', 'aute', 'laborum'],
  company: { id: 123, name: 'Facebook' }
};

const entries = Object.entries(obj);
// entries == [
//   ['name', 'Mayer Aguirre'],
//   ['age', 30],
//   ['tags', ['officia', 'proident', 'commodo', 'aute', 'laborum']],
//   ['company', { id: 123, name: 'Facebook' }]
// ];