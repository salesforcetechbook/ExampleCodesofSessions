import { LightningElement,track } from 'lwc';
import { subscribe, unsubscribe, onError, setDebugFlag, isEmpEnabled } from 'lightning/empApi';
export default class PlatformEventEg extends LightningElement {
    channelName = '/event/Record_Creation__e';   
    subscription = {};
    @track accountNameList = [];

    connectedCallback(){
        this.handleSubscribe();
    }


    handleSubscribe() {
        // Callback invoked whenever a new event message is received
        // Invoke subscribe method of empApi. Pass reference to messageCallback
        subscribe(this.channelName, -1, this.messageCallback).then(response => {
            // Response contains the subscription information on subscribe call
            console.log('Subscription request sent to: ', JSON.stringify(response.channel));
            this.subscription = response;           
        });        
    }
    handleUnsubscribe() {
        // Invoke unsubscribe method of empApi
        unsubscribe(this.subscription, response => {
            console.log('unsubscribe() response: ', JSON.stringify(response));
            // Response is true for successful unsubscribe
        });
    }

    disconnectedCallback(){

        this.handleUnsubscribe();
    }


    messageCallback  = (response) => {      
        let actName = response.data.payload.Record_Name__c;
        let actId = response.data.payload.Record_Id__c;    
        let recPath = '/'+response.data.payload.Record_Id__c; 
        //let tempAccoutList = [];
        this.accountNameList.push({"Id":actId,"Name":actName,"Path":recPath});
        console.log('this.accountNameList::'+JSON.stringify(this.accountNameList));
        //this.accountNameList = tempAccoutList;       
      
        // Response contains the payload of the new message received
    }

}