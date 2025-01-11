import { Module } from '../../core/module';
import { random } from '../../utils';

import './shape-module.css';

const MIN_SHAPE_SIZE = 50;
const MAX_SHAPE_SIZE = 300;

const shapeMap = {
    0: 'circle',
    1: 'square',
    2: 'diamond',
}

const colors = [
    'rgba(255,102,65,0.2)', 
    'rgba(228,70,122,0.2)', 
    'rgba(32,152,255,0.2)', 
    'rgba(50,249,176,0.2)', 
    'rgba(32,152,255,0.2)', 
    'rgba(172,50,249,0.2)'
];

export class ShapeModule extends Module {
    constructor(type, text) {
        super(type, text)
    }
    
    trigger() {
        const body = document.querySelector('body');
        const size = random(MIN_SHAPE_SIZE, MAX_SHAPE_SIZE);
        const shapeType = shapeMap[random(0, 2)]
        const bodyHeight = body.clientHeight;
        const bodyWidth = body.clientWidth;
        const colorStart = colors[random(0, colors.length - 1)];
        const colorEnd = colors[random(0, colors.length - 1)];

        const figure = document.createElement('div');
        figure.classList.add('shape-module');
        figure.style.width = `${size}px`;
        figure.style.height = `${size}px`;
        figure.style.top = `${random(30, bodyHeight - size)}px`;
        figure.style.left = `${random(0, bodyWidth - size)}px`;
        figure.style.backgroundImage = `linear-gradient(45deg, ${colorStart}, ${colorEnd})`;

        switch (shapeType) {
            case 'circle': 
                figure.style.borderRadius = '50%';
                break;
            case 'square': 
                figure.style.borderRadius = '4px';
                break;
            case 'diamond': 
                figure.style.borderRadius = '4px';
                figure.style.transform = 'rotate(45deg)'
                break;
        }

        console.log(random(20, 100))
        
        body.append(figure);
    }
}