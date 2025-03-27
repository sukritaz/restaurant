import * as domElements from './constants/domElements.js';

export default function buildUI() {
    buildBody();
    buildHeader();
}

function buildBody() {
    domElements.body.appendChild(domElements.header);
    domElements.body.appendChild(domElements.content);
    domElements.body.appendChild(domElements.footer);
}

function buildHeader() {
    domElements.header.textContent = 'Mo Thali';
}

