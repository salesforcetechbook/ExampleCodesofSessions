public class QuickContactCreation {
	@Auraenabled
    public static String createContactwithAccountDetails(String accountId){
        Account actObj = [select id,name,phone from Account where id =:accountId];
        Contact contactObj = new Contact();
        contactObj.LastName = actObj.Name;
        contactObj.AccountId = actObj.Id;
        contactObj.Phone= actObj.Phone;
        insert contactObj;
        return contactObj.Id;
    }
    @Auraenabled
    public static String createContact(Contact contObj){
        insert contObj;
        return contObj.Id;
    }
}