const { URL } = require("url");
const url = new URL("https://www.google.com/");
console.log(url.protocol); // https:
console.log(url.hostname); // www.google.com
