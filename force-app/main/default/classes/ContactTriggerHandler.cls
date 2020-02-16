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
}