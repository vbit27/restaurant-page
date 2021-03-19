
export const appendHome = () => {
    const containerElement = document.createElement('div');
    const titleContainerElement = document.createElement('div');
    const titleElement = document.createElement('h1');
    const subTitleElement = document.createElement('h3');
    const imageContainerElement = document.createElement('div');
    const imageElement = document.createElement('img');





    containerElement.classList = 'container';
    titleContainerElement.classList = 'title-container';
    titleElement.innerHTML = "The tea you'll <br> never spill";
    titleElement.classList = 'title';
    subTitleElement.innerHTML = '100% ORGANIC & FAIR TRADE';
    imageContainerElement.classList = 'img-container';
    imageElement.setAttribute('src', '../img/tea.jpg');
    imageElement.setAttribute('alt', 'tea cup');



    titleContainerElement.appendChild(subTitleElement );
    titleContainerElement.appendChild(titleElement);
    containerElement.appendChild(titleContainerElement);
    imageContainerElement.appendChild(imageElement);
    containerElement.appendChild(imageContainerElement);


    return containerElement;

}

