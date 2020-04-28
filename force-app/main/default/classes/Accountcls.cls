public class Accountcls {
    ////
    public Account actObj{get;set;}
    public Accountcls(){
        actObj = new Account();
    }
    public pagereference saveAccount(){
        insert actObj;
        return new pagereference('/'+actObj.Id);
    }
    @AuraEnabled (cacheable=true)
    public static List<Account> getAccountList(){
        return[SELECT Id, Name,Type,Industry,AnnualRevenue
                FROM Account];
    }

}