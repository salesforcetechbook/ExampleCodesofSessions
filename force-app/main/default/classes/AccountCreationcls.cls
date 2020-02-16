public with sharing class AccountCreationcls {
    public Account actObj{get;set;}
    public AccountCreationcls() {
            actObj = new Account();
    }
    public Pagereference saveAccount(){
         insert actObj;
         return new Pagereference('/'+actObj.id);
    }
}