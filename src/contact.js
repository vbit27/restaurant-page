

export const appendContact = () => {
    const contactContainerElement = document.createElement('div');
    const paragraphElement = document.createElement('p');

    contactContainerElement.classList = 'contact-container';
    paragraphElement.innerHTML = 'I am a Contact';

    contactContainerElement.appendChild(paragraphElement);

    return contactContainerElement;

}