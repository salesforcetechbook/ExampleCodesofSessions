import { LightningElement, track } from 'lwc';
import { createMessageContext, releaseMessageContext,APPLICATION_SCOPE,subscribe, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/SampleMessageChannel__c";
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
export default class Subscriber_lwc extends LightningElement {
    context = createMessageContext();
    subscription = null;
    @track receivedMessage = '';
    @track accountId;
    @track objectApiName='Account';
    fields = [NAME_FIELD, REVENUE_FIELD, INDUSTRY_FIELD];
    connectedCallback(){
        this.subscribeMC();
    }
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.handleMessage(message);
        },{scope: APPLICATION_SCOPE});
     }
     handleMessage(message) {       
        console.log('message:::'+JSON.stringify(message));
        this.accountId = message.recordId;
        this.receivedMessage = message ? message.recordData.value : 'no message payload';
    }
}