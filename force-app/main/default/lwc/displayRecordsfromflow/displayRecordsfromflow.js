import { LightningElement,api } from 'lwc';

export default class DisplayRecordsfromflow extends LightningElement {
    @api contactRecords = [];
    @api fieldColumns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName'},
        { label: 'Email', fieldName: 'Email' }
        ];
}