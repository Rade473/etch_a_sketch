const canvas = document.getElementById('drawing')

function createCanvas(n){
    for (i=0; i<n;i++){
       const div = document.createElement('div');
        canvas.appendChild(div)
        div.classList.add('activedrawing')
    }
}

