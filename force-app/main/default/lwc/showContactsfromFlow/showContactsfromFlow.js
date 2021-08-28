import { LightningElement,api } from 'lwc';

export default class ShowContactsfromFlow extends LightningElement {
    @api records = [];
    @api fieldColumns = [
        { label: 'First Name', fieldName: 'FirstName' },
        { label: 'Last Name', fieldName: 'LastName'},
        { label: 'Email', fieldName: 'Email' }
        ];
}