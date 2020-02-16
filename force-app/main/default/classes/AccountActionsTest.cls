@isTest
private class AccountActionsTest {

	private static testMethod void testCreateContact() {
        Account actObj = new Account();
        actObj.Name = 'SalesforceTechbook';
        actObj.Industry = 'Engineering';
        actObj.Type = 'Other';
        Test.startTest();
            insert actObj;
        Test.stopTest();
        Contact contObj = [select id,name from Contact where accountId=:actObj.Id];
        System.assert(contObj.Id!=null);
	}
    private static testMethod void testCreateOpportunity() {
        Account actObj = new Account();
        actObj.Name = 'SalesforceTechbook';
        actObj.Industry = 'Engineering';
        actObj.Type = 'Other';
        actobj.Rating = 'Hot';
        insert actObj;
        Test.startTest();
            actobj.Rating = 'Warm';
            update actObj;
        Test.stopTest();
            Opportunity oppObj = [select id,name from Opportunity where accountId = :actObj.id];
        System.assert(oppObj.Id!=null);
	}
}