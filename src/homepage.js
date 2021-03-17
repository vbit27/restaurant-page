
export const appendHome = () => {
    const containerElement = document.createElement('div');
    const titleContainerElement = document.createElement('div');
    const titleElement = document.createElement('h1');
    const buttonElement = document.createElement('button');
    const imageContainerElement = document.createElement('div');



    containerElement.classList = 'container';
    titleContainerElement.classList = 'title-container';
    titleElement.innerHTML = "The tea you'll <br> never spill";
    titleElement.classList = 'title';
    buttonElement.innerHTML = 'Our Products';
    imageContainerElement.classList = 'img-container';
    const imageElement = document.createElement('img');
    imageElement.setAttribute('src', '../img/tea.jpg');
    imageElement.setAttribute('alt', 'tea cup');



    titleContainerElement.appendChild(titleElement);
    titleContainerElement.appendChild(buttonElement);
    containerElement.appendChild(titleContainerElement);
    imageContainerElement.appendChild(imageElement);
    containerElement.appendChild(imageContainerElement);


    return containerElement;

}

