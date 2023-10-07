//var fs = require('fs');
const list = document.getElementById("content");

const newsletters = ["asd", "qwe", "zxc"];

//var files = fs.readdirSync('/newsletters/');

//console.log(files);

newsletters.forEach((newsletter) => {
  const li = document.createElement("li");
  li.textContent = newsletter;
  list.appendChild(li);
});
