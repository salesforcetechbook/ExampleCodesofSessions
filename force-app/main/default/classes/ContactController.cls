public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContactByAccountId(String accountId) {      
        return [
            SELECT Id, FirstName,LastName,Email,Phone  
            FROM Contact 
            WHERE AccountId=:accountId 

            LIMIT 10];
    }
}
