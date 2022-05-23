document.addEventListener('DOMContentLoaded', function(){
  slidernumber = parseInt(slider.value)
  size=slidernumber*slidernumber
  createCanvas(size)
}
)



let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

let colorMode = true;
let rainbowMode;
let eraserMode;

const canvas = document.getElementById('drawing')
const slider = document.getElementById('myRange');
const sizevalue = document.getElementById('sizevalue')
const clearbtn = document.getElementById('clear')
const color = document.getElementById('colorpicker')
const drawingelements = document.querySelectorAll('.drawingelement')
const colorbtn = document.getElementById('colormode')
const rainbowbtn = document.getElementById('random')
const eraserbtn = document.getElementById('eraser')



sizevalue.innerHTML = `${slider.value}x${slider.value}`;
slider.oninput = function changeSlider() {
    sizevalue.innerHTML = `${this.value}x${this.value}`;
    slidernumber = parseInt(slider.value)
  
  }
slider.onmouseup = function changeCanvas(){
    clearCanvas()
    createCanvas(size);
}

clearbtn.addEventListener('click',clearBtn)
function clearBtn(){
  clearCanvas()
  createCanvas(size)
}
function clearCanvas(){
   canvas.innerHTML = '';
}
function draw(e){
    if (e.type ==='mouseover'&& !mouseDown) return
    else if (colorMode === true){
    this.style.backgroundColor = color.value}
    else if (rainbowMode === true){
    randomColor = Math.floor(Math.random()*16777215).toString(16)
    this.style.backgroundColor = '#' + randomColor;
    }
    else if(eraserMode === true){
      this.style.backgroundColor = 'white'
    }
}
function createCanvas(size){
    for (i=0; i<size;i++){
        const div = document.createElement('div');
        canvas.appendChild(div)
        div.classList.add('drawingelement')
        div.style.backgroundColor = 'none'
        div.addEventListener('mouseover',draw)
        div.addEventListener('mousedown', draw)
        document.documentElement.style.setProperty('--size', `${slidernumber}`)
    }
}

colorbtn.addEventListener('click',enterColorMode)
function enterColorMode(){
  colorMode = true;
  rainbowMode = false;
  eraserMode = false;
 
}
rainbowbtn.addEventListener('click',enterRainbowMode)
function enterRainbowMode(){
  rainbowMode = true;
  colorMode = false;
  eraserMode = false;
  
}
eraserbtn.addEventListener('click',enterEraserMode)
function enterEraserMode(){
  eraserMode = true;
  rainbowMode = false;
  colorMode = false;
}

color.addEventListener('input',enterColorMode)


