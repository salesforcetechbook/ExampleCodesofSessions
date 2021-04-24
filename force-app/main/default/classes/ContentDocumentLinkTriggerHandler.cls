public with sharing class ContentDocumentLinkTriggerHandler {
    public static void updateAccountonFileInsert(List<ContentDocumentLink> contDocumentList){
        Set<id> accountIdSet = new Set<id>();
        Map<Id,Account> accountMap = new Map<Id,Account>();
        for(ContentDocumentLink contDocLinkObj:contDocumentList){
            if(contDocLinkObj.LinkedEntityId!=null 
                && String.valueOf(contDocLinkObj.LinkedEntityId).startsWithIgnoreCase('001')){
                    accountIdSet.add(contDocLinkObj.LinkedEntityId);
            }

        }
        if(accountIdSet.size()>0){
            for(AggregateResult agResultObj:[select count(id) flcount,LinkedEntityId actId from ContentDocumentLink 
                        where LinkedEntityId in:accountIdSet group by LinkedEntityId]){

                Account actObj = new Account(Id=(Id)agResultObj.get('actId'),Total_No_of_Files__c=(decimal)agResultObj.get('flcount'));
                accountMap.put(actObj.Id,actObj);       
            }
            if(accountMap.size()>0){
                try{
                    update accountMap.values();
                }
                catch(Exception e){
                    
                }
               
            }
        }


    }
}
