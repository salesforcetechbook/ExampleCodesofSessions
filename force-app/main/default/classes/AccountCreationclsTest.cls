@isTest
private class AccountCreationclsTest {

	private static testMethod void test() {
        Account actObj = new Account();
        actObj.Name = 'Test Balaji';
        actObj.Type = 'Other';
        actObj.Rating = 'Cold';
        Test.startTest();
            AccountCreationcls actCreationObj = new AccountCreationcls();
            actCreationObj.actObj = actObj;
            actCreationObj.saveAccount();
        Test.stopTest();
	}

}