import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import LEAD_SOURCE from '@salesforce/schema/Contact.LeadSource';
import getProfiles from '@salesforce/apex/PicklistHelper.getProfiles';
export default class PickListExample extends LightningElement {
    selectedValue;
    selectedAccountType;
    selectedLeadSource;
    profileOptionsList;
    selectedProfile;
    /*Static Values*/
    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }
    /*retrieve picklist values from Account Type Field */
    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: TYPE_FIELD
    }) typeValues;

     /*retrieve picklist values from Contact Lead Source Field */
     @wire(getPicklistValues, {
        recordTypeId: '0126F000001Wxpc',
        fieldApiName: LEAD_SOURCE
    }) leadSourceValues;

    @wire(getProfiles) 
    retrieveProfiles({error,data}){
        let tempArray = [];
        if(data){
            for(let key in data){
                tempArray.push({label:data[key],value:key});
            }
        }
        this.profileOptionsList=tempArray;
    }



    /*Handle Selected Value for static values*/
    handleChange(event){        
        this.selectedValue = event.target.value;
    }
    /*hadle selected type for Account Type Field*/
    handleTypeChange(event){
        this.selectedAccountType = event.target.value;
    }
    /*Handle selected Lead Source */
    handleLeadSourceChange(event){
        this.selectedLeadSource = event.target.value;
    }
    /*hadnling profiles*/
    handleProfileChange(event){
        this.selectedProfile = event.target.value;
        this.template.querySelector("[data-id='selectId']").value = this.selectedProfile;
    }
}