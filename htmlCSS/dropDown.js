// let theNodes = document.querySelectorAll('.myYears');

let mySelect = document.querySelector('.myYears');
let theHTML = '';

for (let i = 1901; i < 2019; i++) {
  theHTML = theHTML.concat(`<option>${i}</option>`);
}

mySelect.innerHTML = theHTML;
