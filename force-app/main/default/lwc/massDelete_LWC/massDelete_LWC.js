import { LightningElement,wire,track } from 'lwc';
import getContactList from '@salesforce/apex/MassDeleteContacts.getContactList';
import deleteSelectedContacts from '@salesforce/apex/MassDeleteContacts.deleteSelectedContacts';
import { refreshApex } from '@salesforce/apex';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class MassDelete_LWC extends LightningElement {
    @wire(getContactList) contacts;
    @track selectedContactIdList = [];
    @track message;
    @track columns = [
        {label:'First Name',fieldName:'FirstName',type:'text'},
        {label:'Last Name',fieldName:'LastName',type:'text'}
    ];
    deleteSelRecords(){
        deleteSelectedContacts({selContactIdList:this.selectedContactIdList})
        .then(result => {               
            this.dispatchEvent( 
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Selected Contacts are deleted!',
                    variant: 'success',
                }),
            );    
              //for clearing selected row indexs 
            this.template.querySelector('lightning-datatable').selectedRows = [];

            return refreshApex(this.contacts);        
        })
        .catch(error => {
            this.message = undefined;
            this.error = error;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error creating records',
                    message: error.body.pageErrors[0].message,
                    variant: 'error',
                }),
            );
            console.log("error", JSON.stringify(this.error));
        });
    }

    prepareSelectedRows(event){
        const selectedRows=event.detail.selectedRows; 
        this.selectedContactIdList = []; 
        for (let i = 0; i < selectedRows.length; i++){           
            this.selectedContactIdList.push(selectedRows[i].Id);
        }  
        console.log(this.selectedContactIdList);   
    }
}