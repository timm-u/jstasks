//Kristjan Krimm
//19.12.2021
//task2.js

function showUserIp() {
  const ipaddress = Object.values(require("os").networkInterfaces())
    .flat()
    .filter((item) => !item.internal && item.family === "IPv4")
    .find(Boolean).address;
  return ipaddress;
}

console.log(showUserIp());
