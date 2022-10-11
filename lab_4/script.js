'use strict'

const listFitstObject = document.getElementById('firstObject');
const listSecondObject = document.querySelector('.secondObject');


function randomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
}


const changeColorsQuerySelector = () => {
    listSecondObject.style.background = randomColor();
    listSecondObject.style.color = randomColor();
};



const paintFirstObject = () => {
    listFitstObject.style.background = randomColor();
    listFitstObject.style.color = randomColor();
};

const paintSecondObject = () => {
    listSecondObject.style.background = randomColor();
    listSecondObject.style.color = randomColor;
};

listFitstObject.onclick = paintFirstObject;

const addImage = () => {
    const image = document.getElementById('newImg');
    if (!image) {
        const image = document.createElement('img');
        image.id = 'newImg';
        image.src = 'London.jpg';
        image.style.width = '620px';
        image.style.height = '450px';
        body.appendChild(image);
    }
};

const deleteImage = () => {
    const image = document.getElementById('newImg');
    image ? body.removeChild(image): null; 
};

const increaseImage = () => {
    const image = document.getElementById('newImg');
    const size = image.style.width.split('px');
    image.style.width = (parseInt(size[0]) + 10).toString() + 'px';
};

const decreaseImage = () => {
    const image = document.getElementById('newImg');
    const size = image.style.width.split('px');
    image.style.width = (parseInt(size[0]) - 10).toString() + 'px';
};
    
const body = document.querySelector('body');
const buttonDiv = document.createElement('div');

const addButton = document.createElement('button');
addButton.innerHTML = 'Add Image';
addButton.onclick = addImage;

const deleteButton = document.createElement('button');
deleteButton.innerHTML = 'Delete Image';
deleteButton.onclick = deleteImage;

const increaseButton = document.createElement('button');
increaseButton.innerHTML = 'increase size';
increaseButton.onclick = increaseImage;

const decreaseButton = document.createElement('button');
decreaseButton.innerHTML = 'decrease size';
decreaseButton.onclick = decreaseImage;

body.appendChild(buttonDiv);
buttonDiv.appendChild(addButton);
buttonDiv.appendChild(deleteButton);
buttonDiv.appendChild(increaseButton);
buttonDiv.appendChild(decreaseButton);
