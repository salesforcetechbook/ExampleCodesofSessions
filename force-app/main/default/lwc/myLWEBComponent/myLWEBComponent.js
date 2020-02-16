import { LightningElement } from 'lwc';

export default class DemoAccordion extends LightningElement {
    multiple = true;

    handleSectionToggle(event){
        const myOpenSections = event.detail.openSections;
    }
}