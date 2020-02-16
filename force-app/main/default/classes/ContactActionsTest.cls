@isTest
private class ContactActionsTest {
    @testSetup static void setUpdata() {
        Contact contObj = new Contact();
        contObj.lastName = 'Test Contact';
        contObj.firstName = 'Test';
        contObj.leadSource = 'Web';
        contObj.isPrimary__c = true;
        insert contObj;
    }

	private static testMethod void testCaseCreation() {
        Contact contObj = [select id,leadSource from Contact limit 1];
        contObj.leadSource ='Other';
        Test.startTest();
            update contObj;
        Test.stopTest();
        Case caseObj = [select id from Case where contactid =:contObj.Id];
        System.assert(caseobj.id!=null);
	}
	
	private static testMethod void testPreventContactDeletion() {
        Contact contObj = [select id,isPrimary__c from Contact limit 1];
        
        Test.startTest();
            Database.DeleteResult result =  database.delete(contObj,false);
        Test.stopTest();
         System.assertEquals('Primary Contact Cannot be deleted',result.getErrors()[0].getMessage());
	}

}