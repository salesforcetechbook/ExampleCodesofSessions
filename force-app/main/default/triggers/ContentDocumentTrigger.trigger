trigger ContentDocumentTrigger on ContentDocument (before delete) {
    if(trigger.isDelete && trigger.isBefore){
        ContentDocumentTriggerHandler.updateAccountonFileDelete(trigger.old);
    }
}