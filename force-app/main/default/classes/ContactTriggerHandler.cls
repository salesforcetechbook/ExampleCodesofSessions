public class ContactTriggerHandler {
    public static void createCase(Map<Id,Contact> contactNewMap,Map<Id,Contact> contactOldMap){
            List<Case> caseList = new List<Case>();
            for(Contact contObj:contactnewMap.values()){
                    if(contactNewMap.get(contObj.Id).LeadSource!=contactOldMap.get(contObj.Id).LeadSource 
                            && contactNewMap.get(contObj.Id).LeadSource=='Other'){
                        Case caseObj = new Case();
                        caseObj.Status = 'Open';
                        caseObj.Priority = 'High';
                        caseObj.Origin = 'Other';
                        caseObj.Subject = 'Contact created from lead Source Other';
                        caseObj.Contactid = contObj.Id;
                        caseList.add(caseObj);
                    }
            }
            if(!caseList.isEmpty()){
                insert caseList;
            }
    }
    public static void preventDeletePrimaryContact(List<Contact> contactList){
        for(Contact contObj:contactList){
            if(contObj.IsPrimary__c){
                contObj.addError('Primary Contact Cannot be deleted');
            }
        }
    }
    //sarting of logic to prevent user to create primary contact if there is any existing primary contact uner account
    public static void preventCreatePrimaryContactOnInsert(List<Contact> contactList){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Contact> accountIdContactMap = new Map<Id,Contact>();

        for(Contact contactObj:contactList){
            if(contactObj.IsPrimary__c==true && contactObj.AccountID!=null){               
                accountIdSet.add(contactObj.AccountID);
            }
        }
        if(accountIdSet!=null && accountIdSet.size()>0){            
            //Preparation of map accountIdContactMap for existing primary contact
            for(Contact contObj:[select id,IsPrimary__c,AccountId from Contact 
                    where AccountId in:accountIdSet and IsPrimary__c=true]){
                    accountIdContactMap.put(contObj.AccountId,contObj);
            }
            //validation starts
            for(Contact contactObj:contactList){
                if(contactObj.IsPrimary__c==true && contactObj.AccountID!=null
                     && accountIdContactMap.get(contactObj.AccountId)!=null){
                        contactObj.addError('You can\'t create more than one primary contact.');
                    }                       
            }
        }

        
    }
    public static void preventPrimaryContactonUpdate(Map<Id,Contact> contactNewMap,Map<Id,Contact> contactOldMap){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Contact> accountIdContactMap = new Map<Id,Contact>();
        for(Contact contactObj:contactNewMap.values()){
            if(contactNewMap.get(contactObj.id).IsPrimary__c!=contactOldMap.get(contactObj.Id).IsPrimary__c 
                && contactNewMap.get(contactObj.id).IsPrimary__c==true && contactNewMap.get(contactObj.id).AccountID!=null){               
                accountIdSet.add(contactNewMap.get(contactObj.id).AccountID);
            }
        }
        if(accountIdSet!=null && accountIdSet.size()>0){   
            //Preparation of map accountIdContactMap for existing primary contact
            for(Contact contObj:[select id,IsPrimary__c,AccountId from Contact 
                    where AccountId in:accountIdSet and IsPrimary__c=true]){
                    accountIdContactMap.put(contObj.AccountId,contObj);
            }
            //Validation
            for(Contact contactObj:contactNewMap.values()){
                if(contactNewMap.get(contactObj.id).IsPrimary__c!=contactOldMap.get(contactObj.Id).IsPrimary__c 
                    && contactNewMap.get(contactObj.id).IsPrimary__c==true 
                    && contactNewMap.get(contactObj.id).AccountID!=null 
                    && accountIdContactMap.get(contactNewMap.get(contactObj.id).AccountID)!=null){               
                        contactObj.addError('You can\'t make more than one contact as primary.');
                }
            }


        }

    }

    //Calculate Number of Contacts 
    public static void calculateNumberofContactsonInsert(List<Contact> contactList){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Account> accountMap = new Map<Id,Account>();
        for(Contact contactObj:contactList){
            if(contactObj.AccountID!=null){
                accountIdSet.add(contactObj.AccountID);
            }
        }
        if(accountIdSet!=null && accountIdSet.size()>0){
            for(AggregateResult agrResultObj:[select count(id) contCount,AccountId 
                    from Contact where AccountId in:accountIdSet Group By AccountId]){
                Account actObj = new Account();       
                actObj.Id= (Id)agrResultObj.get('AccountId');
                actObj.No_of_Contacts__c = (Integer)agrResultObj.get('contCount');
                accountMap.put(actObj.Id,actObj);
            }

            if(accountMap!=null && accountMap.size()>0){
                update accountMap.values();
            }
        }
    }
    public static void calculateNumberofContactsonDelete(List<Contact> contactList){
        Set<Id> accountIdSet = new Set<Id>();
        Map<Id,Account> accountMap = new Map<Id,Account>();
        for(Contact contactObj:contactList){
            if(contactObj.AccountID!=null){
                accountIdSet.add(contactObj.AccountID);
            }
        }
        if(accountIdSet!=null && accountIdSet.size()>0){
            for(AggregateResult agrResultObj:[select count(id) contCount,AccountId 
                    from Contact where AccountId in:accountIdSet and id not in:contactList 
                    Group By AccountId]){
                Account actObj = new Account();       
                actObj.Id= (Id)agrResultObj.get('AccountId');
                actObj.No_of_Contacts__c = (Integer)agrResultObj.get('contCount');
                accountMap.put(actObj.Id,actObj);
            }

            if(accountMap!=null && accountMap.size()>0){
                update accountMap.values();
            }
        }
    }


}