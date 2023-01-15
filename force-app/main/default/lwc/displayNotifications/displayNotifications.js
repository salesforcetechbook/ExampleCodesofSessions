import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DisplayNotifications extends LightningElement {
    handleAlertClick() {
        LightningAlert.open({
            message: 'This is the alert message',
            theme:'success',
            variant: 'headerless',
        }).then((result) => {
            console.log('alert is closed');
        });

    }


    handleConfirmClick() {
        // confirm
        LightningConfirm.open({
            message: 'This is the confirm message',
            label: 'Please Confirm',
            theme: 'warning',
        }).then((result) => {
            console.log('confirm result:', result);
        });
    }

    handlePromptClick() {
        // prompt
        LightningPrompt.open({
            message: 'This is the prompt message',
            defaultValue: 'Salesforce Techbook',
            label: 'Please Respond',
            // use default theme
        }).then((result) => {
            console.log('prompt result:', result);
        });

    }

    showNotification() {
        const evt = new ShowToastEvent({
            title: 'Toast',
            message: 'Welcome To toast Message',
            variant: 'success',
        });
        this.dispatchEvent(evt);
    }


}