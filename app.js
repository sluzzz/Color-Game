let colors = [
    "rgb(255, 0, 0)", //red
    "rgb(255, 255, 0)", //yellow
    "rgb(0, 255, 0)", //green
    "rgb(0, 255, 255)", //cyan
    "rgb(0, 0, 255)", //blue
    "rgb(255, 0, 255)" //magenta
];

const squares = document.querySelectorAll('.square');
let pickedColor = colors[3];
const colorDisplay = document.querySelector('#colorDisplay');
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
            alert('Correct');
        } else {
            alert ('wrong');
        }
    });

}