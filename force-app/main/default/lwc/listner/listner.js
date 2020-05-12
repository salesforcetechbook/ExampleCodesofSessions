import { LightningElement,track,wire} from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners, fireEvent } from 'c/pubsub';

export default class Listner extends LightningElement {
    @track message;
    @wire(CurrentPageReference) pageRef;
    connectedCallback() {
        registerListener('messagesend', this.handlemessagesend, this);
    }

    handlemessagesend(publisherMessage) {
        this.message = publisherMessage;
    }
    disconnectedCallback() {
        unregisterAllListeners(this);
    }  
}