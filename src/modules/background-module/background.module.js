import {Module} from '../../core/module'
import './background.css'

export class BackgroundModule extends Module {

    constructor(type, text) {
        super(type,text);
    }

    getRandomColor () {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    changeBackgroundColor () {
        document.body.style.backgroundColor = this.getRandomColor();
    }

    trigger (event) {
        const button = document.createElement('button');
        button.className = 'changeColorButton'
        button.style.left = `${event.pageX}px`;
        button.style.top = `${event.pageY}px`;
        button.textContent = 'Сменить фон';
        button.classList.add('active')
        document.body.appendChild(button);

        button.addEventListener('click', () => {
            document.body.style.backgroundColor = this.changeBackgroundColor()
            button.remove()
        })
    }
}