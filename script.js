let CANVAS = document.querySelector('.canvas');
let RESIZE_BUTTON = document.querySelector('#change-grid');
let WHITEOUT_BUTTON = document.querySelector('#whiteout-button');
let WHITEOUT_CHECKBOX = document.querySelector('#whiteout-checkbox');
let CANVAS_WIDTH = 660;
let NUM_OF_COLUMNS = 16;
let MOUSE_DOWN = false;


const fillPixelDrag = (event) => {
    if (MOUSE_DOWN) {
        event.target.style.background = 'black';
        console.log("Mouse down!");
    }
}

const fillPixelClick = (event) => {
    event.target.style.background = 'black';
}

const removeCanvasPixels = () => {
    while(CANVAS.firstChild) {
        CANVAS.removeChild(CANVAS.firstChild);
    }
}

const changeColumnAmount = (newGridNum) => {
    removeCanvasPixels()
    for (var i = 0; i < (newGridNum * newGridNum); i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.classList.add('pixel-hover');
        pixel.style['min-width'] = `${CANVAS_WIDTH / newGridNum}px`
        pixel.addEventListener('mouseover', fillPixelDrag);
        pixel.addEventListener('mousedown', fillPixelClick);
        CANVAS.appendChild(pixel);
    }
}

const toggleMouseButton = () => {
    MOUSE_DOWN = (MOUSE_DOWN === true ? false : true);
}

const mouseUp = () => {
    MOUSE_DOWN = false;
}

const changeGridPrompt = () => {
    let newGridInput = prompt("ENTER NUMBER OF COLUMNS (MAX 100, MIN 16)");
    checkGridInput(newGridInput);
}

const checkGridInput = (newGridInput) => {
    if (isNaN(newGridInput)) {
        alert("INPUT MUST BE A NUMBER")
    }
    else {
        let newGridNum = (parseInt(newGridInput));
        if (newGridNum < 16 || newGridNum > 100) {
            alert("INPUT MUST BE BETWEEN 16 AND 21");
        }
        else {
            console
            changeColumnAmount(newGridNum);
        }
    }
}

const whiteoutMode = () => {
    WHITEOUT_CHECKBOX.classList.add('checkbox-active');
}

window.onload = () => {
    changeColumnAmount(16);
}

CANVAS.addEventListener('mousedown', toggleMouseButton);
CANVAS.addEventListener('mouseup', toggleMouseButton);
document.addEventListener('mouseup', mouseUp);
RESIZE_BUTTON.addEventListener('mousedown', changeGridPrompt);
WHITEOUT_BUTTON.addEventListener('mousedown', whiteoutMode); 