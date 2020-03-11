import { LightningElement,api } from 'lwc';
import Contact_Phone from '@salesforce/schema/Contact.Phone';
import Contact_Email from '@salesforce/schema/Contact.Email';
import Contact_LastName from '@salesforce/schema/Contact.LastName';
import Contact_FirstName from '@salesforce/schema/Contact.LastName';
import Contact_Account from '@salesforce/schema/Contact.AccountId';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ContactQuickUpdate extends LightningElement {
    @api recordId;
    @api objectApiName;
    fieldList= [Contact_FirstName,Contact_LastName,Contact_Email,Contact_Phone,Contact_Account];
    handleContactUpdate(event){
        // Run code when account is created.
        const evt = new ShowToastEvent({
            title: "Contact Update",
            message: "Contact Record:"+event.detail.fields.LastName.value+" is successfully Updated",
            variant: "success",
        });
        this.dispatchEvent(evt);        
    }

}