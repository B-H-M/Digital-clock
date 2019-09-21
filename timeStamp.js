
const before = new Date("August 4 2019 5:30:59");
const now = new Date("August 14 2019 5:30:59");

// console.log(now.getTime(), before.getTime());

const diff = Math.floor(now.getTime() - before.getTime());

// console.log(diff);

const min = Math.floor(diff  / 1000 / 60);

// console.log(min);

const hr = Math.floor(min / 60);

// console.log(hr);

const days = Math.floor(hr / 24);

console.log(`The Blog was written ${days} ago`);


//TimeStamp

const timeStamp = 1565238659000;

console.log(new Date(timeStamp));
