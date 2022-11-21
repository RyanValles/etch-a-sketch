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

// make event listener that colors 'square'

let squares = document.getElementsByClassName("square");
for(let square of squares){
square.addEventListener('mouseover', () => {
  square.style.backgroundColor = "black";
});
}

//make reset button
document.getElementById('reset').onclick = function resetGrid(){
  for(let square of squares){
     square.style.backgroundColor = "white";
    
}};
  


//make option for 10x10 20x20 or 30x30 grid


//make option for black or red or blue hover color

