import { LightningElement,wire,track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountSearchController.getAccounts';
export default class CustomLookupComp extends LightningElement {
    @track accountName = '';
    @track accountList = [];     
    @track accountId; 
    @track isshow=false;
    @track messageResult=false;
    @track isShowResult = true;   
    @track showSearchedValues = false;   
    @wire(getAccounts, {actName:'$accountName'})
    retrieveAccounts ({error, data}) {
       this.messageResult=false;
       if (data) {
           // TODO: Error handling 
           console.log('data::'+data.length);
           if(data.length>0 && this.isShowResult){
               this.accountList = data;                
               this.showSearchedValues = true; 
               this.messageResult=false;
           }            
           else if(data.length==0){
               this.accountList = [];                
               this.showSearchedValues = false;
               if(this.accountName!='')
                   this.messageResult=true;               
           }  
               
       } else if (error) {
           // TODO: Data handling
           this.accountId =  '';
           this.accountName =  '';
           this.accountList=[];           
           this.showSearchedValues = false;
           this.messageResult=true;   
       }
   }
   handleClick(event){
    this.isShowResult = true;   
    this.messageResult=false;        
  }
  handleKeyChange(event){       
    this.messageResult=false; 
    this.accountName = event.target.value;
  }  
  handleParentSelection(event){        
    this.showSearchedValues = false;
    this.isShowResult = false;
    this.messageResult=false;
    //Set the parent calendar id
    this.accountId =  event.target.dataset.value;
    //Set the parent calendar label
    this.accountName =  event.target.dataset.label;      
    console.log('accountId::'+this.accountId);    
    const selectedEvent = new CustomEvent('selected', { detail: this.accountId });
        // Dispatches the event.
    this.dispatchEvent(selectedEvent);    
}
handleOpenModal(event){
    this.isshow = true;
    console.log('balaji:::');
}
handleCloseModal(event){
    this.isshow = false;
}
handleSuccess(event){       
    this.isShowResult = false;
    this.messageResult=false;
    this.isshow = false;
    this.accountId = event.detail.id;
    console.log(event.detail.id);
    //console.log('JSON OBject:'+JSON.stringify(event.detail));
    this.accountName = event.detail.fields.Name.value;
    const selectedEvent = new CustomEvent('selected', { detail: this.accountId });
    // Dispatches the event.
    this.dispatchEvent(selectedEvent);

}
handleReset(event) {
    const inputFields = this.template.querySelectorAll(
        'lightning-input-field'
    );
    if (inputFields) {
        inputFields.forEach(field => {
            field.reset();
        });
    }
     this.isshow = false;
}

}