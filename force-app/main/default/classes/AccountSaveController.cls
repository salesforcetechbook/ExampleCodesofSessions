public with sharing class AccountSaveController {
    public Account actObj{get;set;}
    public List<String> fieldList{get;set;}
    public AccountSaveController() {
            actobj = new Account();
            fieldList = new List<String>();   
            for(Schema.FieldSetMember memberObj:SObjectType.Account.FieldSets.AccountRecordsFieldSet.getFields()){
                fieldList.add(memberObj.getFieldPath());
            }
            

    }
    public pageReference saveRecord(){
        insert actObj;
        return new pageReference('/'+actObj.Id);
    }
}