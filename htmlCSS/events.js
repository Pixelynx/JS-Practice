document.addEventListener('DOMContentLoaded', () => {

  document.querySelector('html').addEventListener('mousemove', function(event) => {
    showCoords(event);
  });

  function showCoords(spot) {
    let x = spot.clientX;
    let y = spot.clientY;
    let result = `X coordinates: ${x} | Y coordinates: ${y}`;
    document.querySelector('.coordinates').innerHTML = result;
  }

})
