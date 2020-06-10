trigger ContactActions on Contact (before delete,after update,before insert,before update,after insert) {   
    if(trigger.isAfter && trigger.isUpdate){
            ContactTriggerHandler.createCase(trigger.newMap,trigger.oldMap);
    }
    if(trigger.isBefore && trigger.isDelete){
        ContactTriggerHandler.preventDeletePrimaryContact(trigger.old);
        ContactTriggerHandler.calculateNumberofContactsonDelete(trigger.old);
    }
    if(trigger.isBefore && trigger.isInsert){
        for(Contact contObj:trigger.new){
            contObj.LeadSource='Web';
        
        }
        ContactTriggerHandler.preventCreatePrimaryContactOnInsert(trigger.new);
    }

    if(trigger.isBefore && trigger.isUpdate){
        ContactTriggerHandler.preventPrimaryContactonUpdate(trigger.newMap,trigger.oldMap);
    }

    if(trigger.isAfter && trigger.isInsert){
        ContactTriggerHandler.calculateNumberofContactsonInsert(trigger.new);
    }
}