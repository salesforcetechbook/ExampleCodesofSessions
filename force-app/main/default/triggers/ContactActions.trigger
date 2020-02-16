trigger ContactActions on Contact (before delete,after update) {   
    if(trigger.isAfter && trigger.isUpdate){
            ContactTriggerHandler.createCase(trigger.newMap,trigger.oldMap);
    }
    if(trigger.isBefore && trigger.isDelete){
        ContactTriggerHandler.preventDeletePrimaryContact(trigger.old);
    }
}