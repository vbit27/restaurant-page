export const appendMenu = () => {
    
const menu = [
    {img: '../img/tea1.jpg',
    name: 'Green Tea'},
    {img: '../img/tea2.jpg',
    name: 'Black Tea'},
    {img: '../img/tea3.jpg',
    name: 'Mint Tea'}
];


const gridContainer = document.createElement('div');
gridContainer.classList = 'grid-container';


menu.forEach(x => render(x));

function render(x) {
    const img = document.createElement('img');
    const name = document.createElement('h3');
    const productCell = document.createElement('div');

    img.setAttribute('src', x.img);
    name.innerHTML = x.name;
    productCell.classList = 'cell';

   appendProduct(img, name, productCell);
}


function appendProduct(img, name, cell) {
    cell.appendChild(img);
    cell.appendChild(name);
    gridContainer.appendChild(cell);
}

return gridContainer;



}