global class AccountCreateServicecls{
     webservice static string actCreateService(String accountName,String type,String industry){
        Account actobj = new Account();
        actobj.Name = accountName;
        actObj.Type = type;
        actObj.industry = industry;
        insert actObj;
        return actObj.id;
    }
}