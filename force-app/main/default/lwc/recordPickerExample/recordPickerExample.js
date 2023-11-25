import { LightningElement } from 'lwc';

export default class RecordPickerExample extends LightningElement {
    selectedAccountId;
    matchingInfo = {
            primaryField:{fieldPath:'Name'},
            additionalFields:[{fieldPath:'AccountNumber'}],
    };
    displayInfo = {
        additionalFields: ['Industry']
    }
    filter = {
        criteria: [
            {
                fieldPath: 'Industry',
                operator: 'eq',
                value:"Energy"
            },
            {
                fieldPath: 'Rating',
                operator: 'eq',
                value:"Hot"
            }
        ],
        filterLogic:'1 OR 2'
    }





    changeHandler(event){
        this.selectedAccountId = event.detail.recordId;
    }
}