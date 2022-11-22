
const container = document.querySelector('#container');

//default grid
createGrid(20);

function createGrid(x){
  gridReset();
  //create grid, append to container
  for(let i = 0; i < (x * x); i++){
  
    const box = document.createElement('div');
    box.classList.add('square');
    container.appendChild(box);
    container.style.cssText = `grid-template-columns: repeat(${x}, auto)`;
     }

  //create black sketch
  let squares = document.getElementsByClassName("square");
    for(let square of squares){
      square.addEventListener('mouseover', () => {
       square.style.backgroundColor = "black";
      }); }

  //reset button
  document.getElementById('reset').onclick = function resetGrid(){
    for(let square of squares){
       square.style.backgroundColor = "white";
      }};

  //make option for black or red or blue hover color
  document.getElementById('black').onclick = function blackHover(){
    for(let square of squares){
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    });
    }}

  document.getElementById('red').onclick = function redHover(){
    for(let square of squares){
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "red";
      });
      }}


  document.getElementById('blue').onclick = function blueHover(){
    for(let square of squares){
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "blue";}
        );}
      }

}

//reset grid before every change
function gridReset(){
  let pixel = container.querySelectorAll('div');
  pixel.forEach((pixel) => pixel.remove())
    
  };

