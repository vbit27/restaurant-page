export const appendMenu = () => {
    const menuContainerElement = document.createElement('div');
    const paragraphElement = document.createElement('p');

    menuContainerElement.classList = 'menu-container';
    paragraphElement.innerHTML = 'I am a para';

    menuContainerElement.appendChild(paragraphElement);

    return menuContainerElement;

}