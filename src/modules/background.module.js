import {Module} from '../core/module'

export class BackgroundModule extends Module {

    constructor(type, text) {
        super(type,text);
        this.createButton();
    }
    getRandomColor () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    changeBackgroundColor () {
        document.body.style.backgroundColor = this.getRandomColor();
    }


    createButton () {
        const button = document.createElement('button');
        button.textContent = 'Сменить фон';
        button.onclick = this.changeBackgroundColor;
        document.body.appendChild(button);
    }
}