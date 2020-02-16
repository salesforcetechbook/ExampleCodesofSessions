public class CreateContactcls {
	@Auraenabled
    public static string createContact(Contact contObj){
        System.debug('contact::'+contObj.firstName);
        insert contObj;
		return contObj.Id;        
    }
    @Auraenabled
    public static List<Contact> retrieveContacts(){
        
        return [select id,FirstName,LastName,email from Contact limit 10];
    }
}