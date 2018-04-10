let numSquares = 6;
let colors = getRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.getElementsByTagName("h1")[0];
let reset = document.getElementById('reset');
let easy = document.getElementById('easy');
let hard = document.getElementById('hard');

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++){
  //init colors to squares
    squares[i].style.backgroundColor = colors[i];
    //click listeners for squares
    //grab clicked color for squares
    squares[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        reset.textContent = "Play Again?"
        changeColors(pickedColor);
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = "Try Again!";
      }
    })
  }

easy.addEventListener("click", function(){
  easy.classList.add("selected");
  hard.classList.remove("selected");
  numSquares = 3;
  colors = getRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;


  for (let i = 0; i < squares.length; i++){
    if (colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = 'none';
    }
  }

})

hard.addEventListener("click", function(){
  hard.classList.add("selected");
  easy.classList.remove("selected");
  numSquares = 6;
  colors = getRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = 'block';
  }

})

reset.addEventListener("click", function(){
  //generate new Colors
  //pick random color from array
  //change colors of squares
  colors = getRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = '#steelblue';
  reset.textContent = "New Colors"
  messageDisplay.textContent = ""
  for (let i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
})

function changeColors(color){
  //Change colors of incorrect squares and header to the color of the correct square after correct guesss
  //loop through all colors to match color
  for (let i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor(){
  let randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

function getRandomColors(num){
  let arr = []

  for (let i = 0; i < num; i++){
    arr[i] = colorGen()
  }
  return arr;
}

function colorGen(){
  let red = Math.floor(Math.random()*255);
  let green = Math.floor(Math.random()*255);
  let blue = Math.floor(Math.random()*255);
  let rgb = "rgb("+red+", "+green+", "+blue+")";
  return rgb;
}
