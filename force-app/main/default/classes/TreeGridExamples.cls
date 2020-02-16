public class TreeGridExamples {
    @AuraEnabled
    public static String getTreeGridData(){
        List<Account> accs = [Select Id , Name,(Select Id , Name from Contacts) from Account];
        Map<Id , Contact> opps =new Map<Id , Contact>( [Select Id , Name,(Select Id ,Name From Opportunities) from Contact]);
        
        List<AccountWrapper> aooo = new List<AccountWrapper>();
        for(Account a : accs){
            AccountWrapper aWraper = new AccountWrapper() ; 
            aWraper.name =a.Name ;
            aWraper.label =a.Name ;
            List<Items> co = new List<Items>();
            for(Contact c : a.Contacts){
                Items conWrapp = new Items();
                conWrapp.name =c.Name ;
                conWrapp.label =c.Name ;
                
                List<Items> wrapperOooo = new List<Items>();
                for(Opportunity o : opps.get(c.Id).Opportunities){
                    Items ooo = new Items(); 
                    ooo.name = o.Name ;
                    ooo.label = o.Name ;
                    wrapperOooo.add(ooo);
                }
                
                conWrapp.items =wrapperOooo ;
                co.add(conWrapp);
            }
            aWraper.items = co;
            aooo.add(aWraper);
            
        }
        return JSON.serializePretty(aooo) ;
    } 
    public Class AccountWrapper{
        @AuraEnabled
        public String name {get;set;}
        @AuraEnabled
        public String label {get;set;}
        @AuraEnabled
        public List<Items> items {get;set;}
    }
    public Class Items{
        @AuraEnabled
        public String name {get;set;}
        @AuraEnabled
        public String label {get;set;}
        @AuraEnabled
        public List<Items> items {get;set;}
    }
    
}