public class ShowRelatedContacts {
    public List<Contact> contactList{get;set;}
    public List<SelectOption> accoutNames{get;set;}
    public String selectedAccount{get;set;}
    public ShowRelatedContacts(){
        contactList = new List<Contact>();
        accoutNames = new List<SelectOption>();
        accoutNames.add(new Selectoption('','--None--'));
        for(Account actObj:[select id,name from  Account limit 20]){
            accoutNames.add(new Selectoption(actObj.Id,actObj.Name));
        }
    }
    public pagereference retrieveContacts(){
        if(selectedAccount!=''){
            contactList = [select id,name,email from Contact where accountId = :selectedAccount];
        }
        
        return null;
    }
}