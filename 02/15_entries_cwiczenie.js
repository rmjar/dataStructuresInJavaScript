const private = {
  _id: "5bc21f3c79bcf542eb644872",
  guid: "ea7aa438-d5c5-4093-b667-b95d1fb48028",
  isActive: true,
  balance: "$1,112.28",
  phone: "+1 (985) 521-2172",
  address: "862 Ditmas Avenue, Nicholson, California, 6889",
  registered: "2018-02-17T01:22:45 -01:00",
};

const public = {
  eyeColor: "blue",
  age: 38,
  name: "Mayer Aguirre",
  gender: "male",
  company: "BUGSALL",
  email: "mayeraguirre@bugsall.com",
  about: "Elit elit reprehenderit ullamco quis anim exercitation ut esse fugiat. Anim pariatur dolor qui aute minim. Cillum exercitation aliquip aliqua voluptate ullamco et incididunt enim.",
};


const privateEntries = Object.entries(private);
const publicEntries = Object.entries(public);

const entries = privateEntries.concat(publicEntries);
entries.sort((x, y) => x[0].localeCompare(y[0]));

const newObj = entries
  .sort((x, y) => x[0].localeCompare(y[0]))
  .reduce((agg, curr) => {
    agg[curr[0]] = curr[1];
    return agg;
  }, {})

console.log(newObj);

const newObj2 = {};
entries.forEach(element => {
  newObj2[element[0]] = element[1];
});