const user = {
  _id: "5bc21f3c79bcf542eb644872",
  guid: "ea7aa438-d5c5-4093-b667-b95d1fb48028",
  isActive: true,
  balance: "$1,112.28",
  age: 38,
  eyeColor: "blue",
  name: "Mayer Aguirre",
  gender: "male",
  company: "BUGSALL",
  email: "mayeraguirre@bugsall.com",
  phone: "+1 (985) 521-2172",
  address: "862 Ditmas Avenue, Nicholson, California, 6889",
  about: "Elit elit reprehenderit ullamco quis anim exercitation ut esse fugiat. Anim pariatur dolor qui aute minim. Cillum exercitation aliquip aliqua voluptate ullamco et incididunt enim.",
  registered: "2018-02-17T01:22:45 -01:00",
};


const userKeys = Object.keys(user);
userKeys.forEach(x => console.log(x+": ", user[x]));