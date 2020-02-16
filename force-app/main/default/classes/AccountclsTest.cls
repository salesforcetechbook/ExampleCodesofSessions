@isTest
private class AccountclsTest {

	private static testMethod void testsaveAccount() {
            Account actObj = new Account();
            actObj.Name = 'Test Account';
            actObj.Type = 'Other';
            actObj.Rating='Hot';
            Test.startTest();
                Accountcls actclsObj = new Accountcls();
                actclsObj.actObj = actObj;
                actclsObj.saveAccount();
            Test.stopTest();
	}

}