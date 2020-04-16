public class AccountActionsHandler {
    public static void createContacts(List<Account> accountsList){
         List<Contact> contactList = new List<Contact>();
         System.Debug('hi hello SFDX');
        for(Account actObj:accountsList){
              Contact contactObj = new Contact();
              contactObj.AccountId = actObj.Id;
              contactObj.LastName = actObj.Name;
              contactList.add(contactObj);
        }
        
        if(!contactList.isEmpty()){
                insert contactList;
        }
        
    }
    
    public static void createOpportunities(Map<id,Account> newAccountMap,Map<id,Account> oldAccountMap){
        
        List<Opportunity> opportunityList = new List<Opportunity>();
        for(Account actObj:newAccountMap.values()){
            if(newAccountMap.get(actObj.Id).Rating != oldAccountMap.get(actObj.Id).Rating  && newAccountMap.get(actObj.Id).Rating=='Warm'){
                Opportunity opportunityObj = new Opportunity();
                opportunityObj.AccountId = actobj.Id;
                opportunityObj.Name = actObj.Name;
                opportunityObj.stageName = 'Prospecting';
                opportunityObj.closeDate = system.today();
                opportunityList.add(opportunityObj);
            }
            
        }
        
        if(!opportunityList.isEmpty()){
            insert opportunityList;
        }
        
    }
    
}