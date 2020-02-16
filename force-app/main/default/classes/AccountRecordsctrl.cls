public class AccountRecordsctrl {
	@Auraenabled
    public static List<Account> getAccounts(){
        return [select id,name,industry from Account limit 10];
    }
    
    @Auraenabled
    public static List<Account> getAccountRecords(String objName,String fields){
        return database.query('select id,'+fields+' from '+objName+' where leadSource!=null and FirstName!=null limit 10');
    }
}