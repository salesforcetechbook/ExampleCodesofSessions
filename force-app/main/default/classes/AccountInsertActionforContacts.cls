public class AccountInsertActionforContacts {
	@InvocableMethod(label='Insert Contacts' description='Inserts the Contacts for accounts')
  public static Void insertContactRecords(List<Account> accountsList) {
    List<Contact> contactList = new List<Contact>();
      System.debug('accountsList::'+accountsList);
      for(Account actObj:accountsList){
          Contact contObj = new Contact();
          contObj.LastName = actObj.Name;
          contObj.accountId = actObj.Id;
          contObj.Phone = actObj.Phone;
          contactList.add(contObj);
      }
      if(contactList!=null && contactList.size()>0){
          insert contactList;
      }
  }
}