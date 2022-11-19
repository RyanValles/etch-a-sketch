//create grid and append to 'container'
const container = document.querySelector('#container');

function createGrid(x){
  for(let i = 0; i < (x * x); i++){
    const box = document.createElement('div');
    box.classList.add('square');
    container.appendChild(box);
  }

}
createGrid(16);