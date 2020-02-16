@isTest
public class Test_DataFactory {

	public static Account prepareAccount(boolean isInsert) {
        Account actObj = new Account();
        actObj.Name = 'SalesforceTechbook';
        actObj.Industry = 'Engineering';
        actObj.Type = 'Other';
        if(isInsert){
            insert actObj;
        }
        return actobj;
	}

}