import '../styles/style.scss'

const canvas = document.querySelector('#draw')
const colorInput = document.querySelector('#favcolor')
const ctx = canvas.getContext("2d");
const widthRange = document.querySelector('.slider')
const currentWidth = document.querySelector('.current-width')


// ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = widthRange.value

function changeWidth(e) {
  ctx.lineWidth = e.target.value
  currentWidth.textContent = `${e.target.value}`
} 

let isDrawing = false;
let lastX = 0;
let lastY = 0;
// let hue = 0;
let direction = true;


function draw(e) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  console.log(e);
  ctx.strokeStyle = colorInput.value
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

//   hue++;
//   if (hue >= 360) {
//     hue = 0;
//   }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

//   if(direction) {
//     ctx.lineWidth++;
//   } else {
//     ctx.lineWidth--;
//   }

}


canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});


canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
widthRange.addEventListener('input', changeWidth )