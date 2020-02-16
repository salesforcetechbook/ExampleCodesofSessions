trigger AccountActions on Account (after insert,after update) {
    if(trigger.isInsert && trigger.isAfter){
         AccountActionsHandler.createContacts(trigger.new);
    }
    if(trigger.isUpdate && trigger.isAfter){
        AccountActionsHandler.createOpportunities(trigger.newMap,trigger.oldMap);
    }
   
}