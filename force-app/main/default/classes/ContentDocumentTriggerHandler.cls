public with sharing class ContentDocumentTriggerHandler {
    public static void updateAccountonFileDelete(List<ContentDocument> contDocumentList){
        Set<Id> contentDocIdSet = new Set<Id>();
        Map<Id,Account> accountMap = new Map<Id,Account>();
        Set<Id> accountIdSet = new Set<Id>();
        Set<Id> contentDocLinkIdSet = new Set<Id>();
        for(ContentDocument contDocObj:contDocumentList){
            contentDocIdSet.add(contDocObj.Id);
        }
        if(contentDocIdSet!=null && contentDocIdSet.size()>0){
            for(ContentDocumentLink objConDocLink:[select id,LinkedEntityId from ContentDocumentLink
                    where ContentDocumentId in: contentDocIdSet] ){
                    if(objConDocLink.LinkedEntityId!=null 
                        && String.valueOf(objConDocLink.LinkedEntityId).startsWith('001')){ 
                        contentDocLinkIdSet.add(objConDocLink.Id);
                        accountIdSet.add(objConDocLink.LinkedEntityId);
                    }
            }
            if(accountIdSet!=null && accountIdSet.size()>0){
                for(Account actObj:[select id,Total_No_of_Files__c,(select id from ContentDocumentLinks where Id not in:contentDocLinkIdSet) 
                        from Account where id in:accountIdSet]){
                    actObj.Total_No_of_Files__c =   actObj.ContentDocumentLinks.size();     
                    accountMap.put(actObj.Id,actObj);        
                }
                if(accountMap!=null && accountMap.size()>0){
                    update accountMap.values();
                }
            }
        }
    }
}
