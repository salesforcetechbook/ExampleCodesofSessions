import { LightningElement } from 'lwc';

export default class ColorPicker extends LightningElement {
    handleColorChange(event){
        const colorCodeVal = event.target.value;
        const colorCodeEvent = new CustomEvent('colorchange',{
            detail:{colorCodeVal},
        });
        this.dispatchEvent(colorCodeEvent);
    }
}