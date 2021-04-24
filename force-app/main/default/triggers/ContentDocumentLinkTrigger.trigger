trigger ContentDocumentLinkTrigger on ContentDocumentLink (after insert,before delete) {
    if(trigger.isInsert && trigger.isAfter){
        ContentDocumentLinkTriggerHandler.updateAccountonFileInsert(trigger.new);
    }
}