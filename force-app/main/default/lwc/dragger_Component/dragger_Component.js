import { LightningElement,wire } from 'lwc';
import getAccounts from '@salesforce/apex/Accountcls.getAccountList';
export default class Dragger_Component extends LightningElement {
    @wire(getAccounts) accounts;
    handleDragStart(event){
        event.dataTransfer.setData("account_id", event.target.dataset.item);
    }
}