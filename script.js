const parentDiv = document.querySelector('.container');
let number = 16
for (let count = 0; count < 16; count++) {
    const childDiv = document.createElement('div');
    parentDiv.appendChild(childDiv);
}