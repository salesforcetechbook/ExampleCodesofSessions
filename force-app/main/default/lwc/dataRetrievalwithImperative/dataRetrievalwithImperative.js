import { LightningElement,track,api} from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccountRecordsList'

export default class DataRetrievalwithImperative extends LightningElement {
    @track accountRecordsList;
    @track errors;
    @api recordId;
    @track columns = [{label:'Name',fieldName:'Name',type:'text'},
        {label:'Industry',fieldName:'Industry',type:'text'},
    ];
    connectedCallback(){
        getAccounts()
            .then(result=>{
                this.accountRecordsList = result;
            })
            .catch(error=>{
                this.errors = error;
            });
    }
}