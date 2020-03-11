public with sharing class RetrieveContacts {
    public List<Contact> contactList{get;set;}
    public RetrieveContacts() {
        contactList = [select id,firstName,lastName,phone from Contact 
            where firstName!=null and lastName!=null and phone!=null limit 10];
    }
}