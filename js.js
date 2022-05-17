document.addEventListener('DOMContentLoaded', function(){
  slidernumber = parseInt(slider.value)
  createCanvas(slidernumber*slidernumber)
  draw()

}
)

const canvas = document.getElementById('drawing')
const slider = document.getElementById('myRange');
const sizevalue = document.getElementById('sizevalue')
const clearbtn = document.getElementById('clear')
const color = document.getElementById('colorpicker')
const activedrawing = document.getElementsByClassName('activedrawing')
const drawblock = document.getElementsByClassName('drawingelement')



sizevalue.innerHTML = `${slider.value}x${slider.value}`;
slider.oninput = function changeSlider() {
    sizevalue.innerHTML = `${this.value}x${this.value}`;
    slidernumber = parseInt(slider.value)
  
  }
slider.onmouseup = function changeCanvas(){
  size=slidernumber*slidernumber
    clearCanvas()
    createCanvas(size);
}

clearbtn.addEventListener('click',clearCanvas)
function clearCanvas(){
   canvas.innerHTML = '';
   
}

function createCanvas(size){
    for (i=0; i<size;i++){
        const div = document.createElement('div');
        canvas.appendChild(div)
        div.classList.add('drawingelement')
        document.documentElement.style.setProperty('--size', `${slidernumber}`)
    }
}

color.oninput =  function changeColor(){
  for (const element of activedrawing) {
    element.style.backgroundColor = color.value
  }
  } 

  function draw(){
    for (const element of drawblock){
      element.classList.add('activedrawing')
    }
  }



