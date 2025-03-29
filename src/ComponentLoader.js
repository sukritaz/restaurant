import * as domElements from './constants/domElements.js';
import thali from '../assets/Thali.png';
import dalma from '../assets/bowl1/dalma.png';
import potol from '../assets/bowl3/Potol.png';
import fish from '../assets/fish/Fish.png';
import palakPaneer from '../assets/bowl2/Palak Paneer.png';
import rasgulla from '../assets/bowl5/Rasgulla.png';
import lalSaag from '../assets/bowl4/Red Saag.png';
import roti from '../assets/roti/Paratha.png';
import rice from '../assets/rice/rice.png';
import garlicPickle from '../assets/pickle.png';

export default function buildUI() {
    buildBody();
    buildHeader();
    buildContent();
    buildFooter();
}

function buildBody() {
    domElements.body.appendChild(domElements.header);
    domElements.body.appendChild(domElements.content);
    domElements.body.appendChild(domElements.footer);
}

function buildHeader() {
    domElements.header.textContent = 'Mo Thali';
}

function buildContent() {
    buildThali();
    buildDataPanel();
    domElements.content.classList.add('content');
    domElements.content.appendChild(domElements.thali);
    domElements.content.appendChild(domElements.dataPanel);
}

function buildThali () {
    domElements.thali.classList.add('thali');
    domElements.thaliImage.src = thali;
    domElements.thaliImage.alt = "Thali";
    domElements.thali.appendChild(domElements.thaliImage);

    buildBowl(domElements.bowl1, domElements.bowl1Image, dalma, "bowl1");
    buildBowl(domElements.bowl2, domElements.bowl2Image, palakPaneer, "bowl2");
    buildBowl(domElements.bowl3, domElements.bowl3Image, lalSaag, "bowl3");
    buildBowl(domElements.bowl4, domElements.bowl4Image, potol, "bowl4");
    buildBowl(domElements.bowl5, domElements.bowl5Image, rasgulla, "bowl5");

    buildRoti();
    buildRice();

    buildPickle();
    buildFish();
}

function buildFooter() {
    domElements.footer.classList.add('footer');
    domElements.footer.textContent = 'Built with ❤️ by Sukritaz';
}

function buildBowl(element, imageElement, imageSrc, elementId) {
    element.classList.add('bowl');
    element.id = elementId;
    imageElement.src = imageSrc;
    imageElement.alt = "Dalma";
    element.appendChild(imageElement);

    domElements.thali.appendChild(element);
}

function buildRoti() {
    domElements.roti.classList.add('roti');
    domElements.rotiImage.src = roti; // Replace with actual image source
    domElements.rotiImage.alt = "Roti";
    domElements.roti.appendChild(domElements.rotiImage);

    domElements.thali.appendChild(domElements.roti);
    
}

function buildRice() {
    domElements.rice.classList.add('rice');
    domElements.riceImage.src = rice; // Replace with actual image source
    domElements.riceImage.alt = "Rice";
    domElements.rice.appendChild(domElements.riceImage);

    domElements.thali.appendChild(domElements.rice);
}

function buildPickle() {
    domElements.papad.classList.add('pickle');
    domElements.papad.id = "pickle";
    domElements.papadImage.src = garlicPickle; // Replace with actual image source
    domElements.papadImage.alt = "Papad";
    domElements.papad.appendChild(domElements.papadImage);

    domElements.thali.appendChild(domElements.papad);
}

function buildFish() {
    domElements.fish.classList.add('fish');
    domElements.fish.id = "fish";
    domElements.fishImage.src = fish; // Replace with actual image source
    domElements.fishImage.alt = "Fish";
    domElements.fish.appendChild(domElements.fishImage);

    domElements.thali.appendChild(domElements.fish);
}

function buildDataPanel() {
    domElements.dataPanel.classList.add('data-panel');
    domElements.dataPanelText.classList.add('data-panel-text');
    domElements.dataPanel.appendChild(domElements.dataPanelText);
    domElements.dataPanelText.textContent = "Hover over your food plate to customize for your cravings! 🤤";
}
