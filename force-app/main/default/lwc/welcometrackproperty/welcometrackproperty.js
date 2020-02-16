import { LightningElement,track } from 'lwc';

export default class Welcometrackproperty extends LightningElement {
    @track greetings;
    handleGreetingChanges(event){
        this.greetings = event.target.value;
        console.log( this.greetings);
    }
}