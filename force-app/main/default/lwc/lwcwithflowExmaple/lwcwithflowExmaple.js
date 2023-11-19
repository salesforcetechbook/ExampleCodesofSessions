import { LightningElement,api } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {NavigationMixin} from 'lightning/navigation';

export default class LwcwithflowExmaple extends NavigationMixin(LightningElement) {
    @api recordId;
    get inputVariables(){
        return [{
                name:'accountid',
                type:'String',
                value:this.recordId
        },
        {
            name:'leadsource',
            type:'String',
            value:'Phone Inquiry'
        }


        ];
    }

    handleStatusChange(event){
       if(event.detail.status === 'FINISHED'){
          const flowOutputVariables = event.detail.outputVariables;
            for(let i=0; i< flowOutputVariables.length; i++){
                const flowoutputvar = flowOutputVariables[i];
                if(flowoutputvar.name === 'contactId'){
                    if(flowoutputvar.value){
                        this.showToast("Success","Contact record is created Successfully","success");
                        this.navigateToContactRecord(flowoutputvar.value);
                    }
                }
            }
        }
    }




    showToast(title,message,variant){
        const evt = new ShowToastEvent({
            title,
            message,
            variant
        });
        this.dispatchEvent(evt);
    }

    navigateToContactRecord(recordId){
        this[NavigationMixin.Navigate]({
            type:'standard__recordPage',
            attributes:{
                recordId,
                actionName:'view'
            }
        });
    }


}