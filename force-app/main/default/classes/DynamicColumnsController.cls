public with sharing class DynamicColumnsController {
    public List<Account> accountList{get;set;}
    public DynamicColumnsController() {
        accountList = new List<Account>();
        String soqlQuery='Select id,';
        for(Schema.FieldSetMember fsetMember:
            SObjectType.Account.FieldSets.Account_Field_Set.getFields()){
                soqlQuery+=fsetMember.getFieldPath()+',';
        }
        soqlQuery = soqlQuery.removeEnd(',');
        soqlQuery+=' from Account';        
        accountList = database.query(soqlQuery);

    }
}