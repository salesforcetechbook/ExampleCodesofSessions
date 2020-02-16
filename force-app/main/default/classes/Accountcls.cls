public class Accountcls {
    public Account actObj{get;set;}
    public Accountcls(){
        actObj = new Account();
    }
    public pagereference saveAccount(){
        insert actObj;
        return new pagereference('/'+actObj.Id);
    }
}