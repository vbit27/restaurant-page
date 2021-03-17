import { appendHome } from './homepage';
import { appendMenu } from './menu';

const content = document.getElementById('content');

content.appendChild(appendHome());
document.body.appendChild(appendMenu());