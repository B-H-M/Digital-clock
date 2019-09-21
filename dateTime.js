//Dates and Times

const now = new Date();

console.log(now);

console.log(typeof now);

//year, Month, Week, Days, Hours, Minutes, Seconds
console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth());
console.log("getDay:", now.getDay());
console.log("getHour:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

//Time Stamp
console.log("getTimeStamp:", now.getTime());

//Date String

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
