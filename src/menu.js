export const appendMenu = () => {
    const navElement = document.createElement('nav');
    const ulElement = document.createElement('ul');
    const menuLiElement = document.createElement('li');
    const homeLiElement = document.createElement('li');
    const contactLiElement = document.createElement('li');

    homeLiElement.innerHTML = 'Home'
    menuLiElement.innerHTML = 'Menu';
    contactLiElement.innerHTML = 'Contact';

    ulElement.appendChild(contactLiElement);
    ulElement.appendChild(menuLiElement);
    ulElement.appendChild(homeLiElement);
    navElement.appendChild(ulElement);

    return navElement;
}