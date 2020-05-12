import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
    @api textMessage;
    sendMessagetoParent(event){
        const sendMessageFromChild = new CustomEvent('childmessage', {detail: 'Hi I am your child'});
        this.dispatchEvent(sendMessageFromChild);
    }

}