const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

document.addEventListener('click', handleClick);
function handleClick(e) {
    console.log(e.key)
    const coords = getCursorPosition (canvas, e)
    bouncing_circle.x = coords.x
    bouncing_circle.y = coords.y
    drawCircleObj(bouncing_circle);
    }

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect(); // Get the canvas position and size
    const x = event.clientX - rect.left; // Calculate X relative to canvas
    const y = event.clientY - rect.top;  // Calculate Y relative to canvas
    return { x, y };
}

const size_inputw = document.getElementById('size_inputw');
size_inputw.onchange = () => canvas.width = size_inputw.value;

const size_inputh = document.getElementById('size_inputh');
size_inputh.onchange = () => canvas.height = size_inputh.value;

const circ_rad = document.getElementById('circ_rad');
circ_rad.onchange = () => bouncing_circle.radius = circ_rad.value;


function userSizeInput(e) {
    onkeydown('Enter') = console.log(size_input.value)
}

let x = 32;
let y = 32;
let draw1 = 0;

function drawCircleObj(obj) {
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI*2);
    ctx.fill();
}

const bouncing_circle = {
    x: 32, 
    y: 32,
    radius: 32,
    hspeed: 2,
    vspeed: 2,
    color: "blue"
}

const erase_circle = {
    x:32,
    y:32,
    radius: 32,
    color: "black"
}


//const drawOpacitySlider = document.getElementById('drawOpacity');
//const drawOpacityOutput1 = document.getElementById('drawOpacityOutput');

//drawOpacitySlider.addEventListener('input', function() {
    ////drawOpacityOutput1 / 100 = drawOpacityOutput1;
    //drawOpacityOutput1.textContent = this.value;
//});
//let drawOpcaityOutput2 = drawOpacityOutput1 / 100
//ctx.globalAlpha = drawOpacityOutput2;


const drawOpacitySlider = document.getElementById('drawOpacity')
let opacity = drawOpacity / 100

ctx.globalAlpha = 0.1





//Drawing Code Here//
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

function draw(e) {
    if (!isDrawing) return; // Stop the function from running when not clicked
    
    bouncing_circle.x = lastX
    bouncing_circle.y = lastY
    drawCircleObj(bouncing_circle);
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    

    // Update lastX and lastY to the current mouse position for the next segment
    [lastX, lastY] = [e.offsetX, e.offsetY];
}
//Drawing Code Here//

const color_picker = document.getElementById("color_picker")
     color_picker.onchange = ()=> canvas.style.backgroundColor = color_picker.value;

const color_picker_draw = document.getElementById("color_picker_draw")
     color_picker_draw.onchange = ()=> bouncing_circle.color = color_picker_draw.value;


// 1. Define the function to run when the button is clicked
function buttonOnAction() {
    bouncing_circle.color = color_picker.value;
}
function buttonOffAction() {
    bouncing_circle.color = color_picker_draw.value;
}

// 2. Select the button element
const erase_on = document.getElementById("erase_on");
const erase_off = document.getElementById("erase_off");

// 3. Add the event listener
erase_on.addEventListener("click", buttonOnAction);
erase_off.addEventListener("click", buttonOffAction);

     function drawLoop() {

}

drawLoop()