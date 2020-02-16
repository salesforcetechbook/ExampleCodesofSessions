public class SaveAccontwithProperties {
    public String accountName{get;set;}
    public String accountType{get;set;}
    public pagereference saveAccount(){
       
        Account actObj = new Account();
        actObj.Name = accountName;
        actObj.Type = accountType;
        insert actObj;
        return new pagereference('/'+actObj.Id);
    }
}