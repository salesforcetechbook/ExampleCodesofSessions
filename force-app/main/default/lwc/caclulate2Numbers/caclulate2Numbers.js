import { LightningElement,track,api } from 'lwc';
import getSumResult from '@salesforce/apex/CalculateNumbers.getSummResult';
export default class Caclulate2Numbers extends LightningElement {
    @track fNumber;
    @track sNumber;
    @track sum;
    @track errors;
    @api title;
    @api greeting;    
    handleClick(){
        getSumResult({firstNumber:this.fNumber,secondNumber:this.sNumber})
        .then(result=>{
            this.sum = result;
        })
        .catch(error=>{
            this.errors = error;
        });
    }
    handleChange(event){
        if(event.target.name==='fstNumber'){
            this.fNumber = event.target.value;            
        }
        else if(event.target.name==='scdNumber'){
            this.sNumber = event.target.value;            
        }
    }
}