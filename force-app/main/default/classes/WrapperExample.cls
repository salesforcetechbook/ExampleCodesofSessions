public class WrapperExample {
    public List<AccountWrapper> accountWrapperList{get;set;}
    
    public List<AccountWrapper> selectedWrapperList{get;set;}
    public WrapperExample(){
        accountWrapperList = new List<AccountWrapper>(); 
        selectedWrapperList = new List<AccountWrapper>();
        AccountWrapper wrapObj1 = new AccountWrapper();
        wrapObj1.accountName = 'Test Corp';
        wrapObj1.accountType = 'Other';
        wrapObj1.isChecked = false;
        accountWrapperList.add(wrapObj1);
        AccountWrapper wrapObj2 = new AccountWrapper();
        wrapObj2.accountName = 'POC12 Corp';
        wrapObj2.accountType = 'Prospect';
         wrapObj2.isChecked = false;
        accountWrapperList.add(wrapObj2);
        for(Account actObj:[select id,name,type from Account limit 5]){
            AccountWrapper wrapperObj = new AccountWrapper();
            wrapperObj.accountName = actObj.Name;
            wrapperObj.accountType = actObj.Type;
             wrapperObj.isChecked = false;
            accountWrapperList.add(wrapperObj);
        }
        
    }
    
    
    
    public void displaySelectedRecords(){
        selectedWrapperList = new List<AccountWrapper>();
        for(AccountWrapper wrapObj:accountWrapperList){
             if(wrapObj.isChecked){
                 selectedWrapperList.add(wrapObj);
             }
        }
    }
    
    
    
    public class AccountWrapper{
        public boolean isChecked{get;set;}
        public String accountName{get;set;}
        public String accountType{get;set;}
    }
    
    
    
    
    
}