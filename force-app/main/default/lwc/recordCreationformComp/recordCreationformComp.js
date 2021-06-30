import { LightningElement,api} from 'lwc';
import {FlowNavigationNextEvent, FlowNavigationFinishEvent} from 'lightning/flowSupport';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordCreationformComp extends LightningElement {
    @api
    availableActions = [];
    @api objectApiName;
    @api title;
    @api parentRecordId;
    @api recordIdAfterSave;
    @api message;
    @api fields;
    @api parentFieldAPIName;
    fieldsList;
    connectedCallback(){
        if(this.fields){           
            this.fieldsList = this.fields.split(",");
        }
    }
    handleSuccess(event) {
        const evt = new ShowToastEvent({
            title: "Record created",
            message: this.message +'with record id:'+ event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(evt);
        this.recordIdAfterSave = event.detail.id;
        this.handleGoNext();
    }
    handleGoNext() {
        if(this.recordIdAfterSave &&  this.recordIdAfterSave.startsWith('006')){
            const finishEvent = new FlowNavigationFinishEvent();
            this.dispatchEvent(finishEvent);
        }
        // check if NEXT is allowed on this screen
        if (this.availableActions.find(action => action === 'NEXT')) {
            // navigate to the next screen
            const navigateNextEvent = new FlowNavigationNextEvent();
            this.dispatchEvent(navigateNextEvent);
        }
    }

    handleSubmit(event){
        event.preventDefault();       // stop the form from submitting
        const fields = event.detail.fields;  
        fields[this.parentFieldAPIName] = this.parentRecordId; // modify a field
        this.template.querySelector('lightning-record-form').submit(fields);
    }

}