import { LightningElement,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import { createMessageContext, releaseMessageContext,publish} from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";

export default class Publish_lwc extends LightningElement {
     context = createMessageContext();
    @track accountList;
    connectedCallback(){
        getAccounts()
            .then(result =>{
                this.accountList = result;
            })
            .catch(error=>{
                this.accountList = error;
            });
    }
    handleClick(event) {
        event.preventDefault();                
        const message = {
            recordId: event.target.dataset.value,
            recordData: { value: "message from Lightning Web Component" }
        };
        publish(this.context, SAMPLEMC, message);
    }
}