public class AccountCretaionCtrl {
    
    public String accountName{get;set;}
    public String accountType{get;set;}
    public Account actObj{get;set;}
    public Id accountId{get;set;}
    public List<Contact> contactList{get;set;}
    public List<Opportunity> opportunityList{get;set;}
    public AccountCretaionCtrl(){
        actObj = new Account();
        contactList = new List<Contact>();
        opportunityList = new List<Opportunity>();
        accountId = ApexPages.CurrentPage().getParameters().get('id');
        contactList = [select id,lastName from Contact where accountId =:accountId];
        opportunityList = [select id,Name from Opportunity where accountId =:accountId];
        
    }
    public pagereference createAccount(){
        insert actObj;
        return new Pagereference('/'+actObj.Id);
    }
}