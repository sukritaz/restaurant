export function createDiv() {
    return document.createElement('div');
}

export function createButton() {
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'Click me!';
}