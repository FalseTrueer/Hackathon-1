import { Module } from '../../core/module';

export class ColorPickerModule extends Module {
    constructor(type, text) {
        super(type, text)
        
        const body = document.querySelector('body');
        const colorpicker = document.createElement('input');
        colorpicker.type = 'color';
        colorpicker.hidden = true;
        colorpicker.addEventListener('click', (e) => {
            e.currentTarget.showPicker();
        })

        body.append(colorpicker);
        this.colorpicker = colorpicker;
    }
    
    trigger() {
        this.colorpicker.click();
        
        this.colorpicker.addEventListener('input', (e) => {
            const body = document.querySelector('body');
            body.style.backgroundColor = e.target.value;
        })        
    }
}