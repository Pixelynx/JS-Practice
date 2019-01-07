// document.addEventListener('DOMContentLoaded', () => {
//
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function() {
//     if(xhr.readyState === 4) {
//       if(xhr.status === 200) {
//         let movieObj = JSON.parse(xhr.response);
//         let ul = document.querySelector('.movies');
//         for(let i = 0; i < movieObj.length; i++) {
//           let li = document.createElement('li');
//           li.innerText = movieObj[i]['title'];
//           ul.appendChild(li);
//         }
//       }
//     }
//   }
//
//   xhr.open("GET", "https://ghibliapi.herokuapp.com/films", true);
//   xhr.send();
// })

document.addEventListener('DOMContentLoaded', () => {

let pokeButt = document.querySelector('.poke');

pokeButt.addEventListener('click', () => {

  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function() {
    if(xml.readyState === 4) {
      if(xml.status === 200) {
        let pokeDex = JSON.parse(xml.response)['results'];
        console.log()
        let ul = document.querySelector('.pokemon');
        for (let i = 0; i < pokeDex.length; i++) {
          // console.log(pokeDex.results.length)
          let li = document.createElement('li');
          li.innerText = pokeDex[i]['name'];
          ul.appendChild(li);
        }
      }
    }
  }


  xml.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);
  xml.send();
})
})
