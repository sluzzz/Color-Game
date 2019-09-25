let colors = generateRandomColors(6);

const squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
const colorDisplay = document.querySelector('#colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');


resetButton.addEventListener('click', function(){
    resetButton.textContent = 'New colors'
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++){    
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = '#232323';
});

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add listeners to squares
    squares[i].addEventListener('click', function() {
        //alert(this.style.backgroundColor);
        //alert(squares[i].style.backgroundColor);
        let clickedColor = squares[i].style.backgroundColor;
        if(clickedColor === pickedColor){
            messageDisplay.textContent = 'Correct';
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = 'Play again'
        } else {
            this.style.backgroundColor = '#232323';
            messageDisplay.textContent = 'Try again';
        }
    });
}

function changeColors(color){
    for (let i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    const arr = [];
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return (`rgb(${r}, ${g}, ${b})`);
}