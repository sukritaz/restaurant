import * as domElements from './constants/domElements.js';
import * as images from './constants/imageElements.js';
import { updateDataPanel } from './utils/dataPanelUtils.js';

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
    domElements.header.id = 'header';
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
    domElements.thaliImage.src = images.thaliImage;
    domElements.thaliImage.alt = "Thali";
    domElements.thali.appendChild(domElements.thaliImage);

    buildBowl(domElements.bowl1, domElements.bowl1Image, images.dalmaImage, "bowl1");
    buildBowl(domElements.bowl2, domElements.bowl2Image, images.palakPaneerImage, "bowl2");
    buildBowl(domElements.bowl3, domElements.bowl3Image, images.lalSaagImage, "bowl3");
    buildBowl(domElements.bowl4, domElements.bowl4Image, images.potolImage, "bowl4");
    buildBowl(domElements.bowl5, domElements.bowl5Image, images.rasgullaImage, "bowl5");

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
    imageElement.addEventListener('click', () => updateDataPanel(elementId));
    imageElement.src = imageSrc;
    element.appendChild(imageElement);

    domElements.thali.appendChild(element);
}

function buildRoti() {
    domElements.roti.classList.add('roti');
    domElements.rotiImage.src = images.rotiImage; // Replace with actual image source
    domElements.rotiImage.alt = "Roti";
    domElements.roti.appendChild(domElements.rotiImage);

    domElements.thali.appendChild(domElements.roti);
    
}

function buildRice() {
    domElements.rice.classList.add('rice');
    domElements.riceImage.src = images.jeeraRiceImage; // Replace with actual image source
    domElements.riceImage.alt = "Rice";
    domElements.rice.appendChild(domElements.riceImage);

    domElements.thali.appendChild(domElements.rice);
}

function buildPickle() {
    domElements.pickle.classList.add('pickle');
    domElements.pickle.id = "pickle";
    domElements.pickleImage.src = images.garlicPickleImage; // Replace with actual image source
    domElements.pickleImage.alt = "Pickle";
    domElements.pickle.appendChild(domElements.pickleImage);

    domElements.thali.appendChild(domElements.pickle);
}

function buildFish() {
    domElements.fish.classList.add('fish');
    domElements.fish.id = "fish";
    domElements.fishImage.src = images.mustardFishImage; // Replace with actual image source
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
