'use-strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}
DomElement.prototype.getElement = function() {
    if (this.selector.substring(0, 1) === '.') {
        let element = `<div class="${this.selector.slice(1)}"></div>`;
        document.body.innerHTML = element;
        let a = document.querySelector(`${this.selector}`);
        a.style.height = this.height;
        a.style.width = this.width;
        a.style.backgroundColor = this.bg;
        a.style.fontSize = this.fontSize;
        a.textContent = 'Любой текст';
    } else if (this.selector.substring(0, 1) === '#') {
        let element = `<div id="${this.selector.slice(1)}"></div>`;
        document.body.innerHTML = element;
        let a = document.querySelector(`${this.selector}`);
        a.style.height = this.height;
        a.style.width = this.width;
        a.style.backgroundColor = this.bg;
        a.style.fontSize = this.fontSize;
    }
};


const domElement = new DomElement('.root', '100px', '300px', '#00ff00', '50px');
console.log(domElement);

domElement.getElement();