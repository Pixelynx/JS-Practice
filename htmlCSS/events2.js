document.addEventListener("DOMContentLoaded", () => {
  let ul = document.getElementById("unordered-list");

  ul.addEventListener("click", event => {
    debugger;
  });

  let ol = document.getElementById("ordered-list");

  ol.addEventListener("click", event => {
    debugger;
  });

  let orderedFirst = document.getElementById("ordered-first");

  orderedFirst.addEventListener("click", event => {
    debugger;
  });

  let body = document.querySelector("body");
  body.addEventListener("click", event => {
    let newNode = document.createElement('h1');
    newNode.innerText = 'hicka bicka boo';
    event.currentTarget.appendChild(newNode);
  });
});
