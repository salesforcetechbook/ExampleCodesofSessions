public class LightningExamplecls {
	@Auraenabled
    public String name{get;set;}
    @Auraenabled
    public String srNumber{get;set;}
    @Auraenabled
    public String industry{get;set;}
    @Auraenabled
    public String companyName{get;set;}
    @Auraenabled
    public List<Account> accountList{get;set;}
    @Auraenabled
    public Static LightningExamplecls getDetails(){
        LightningExamplecls lightningProp = new LightningExamplecls();
        lightningProp.accountList = new List<Account>();
        for(Account actObj:[select id,Name,Industry,Type from Account limit 10]){
             lightningProp.accountList.add(actObj);
        }
        lightningProp.Name = 'Navarshi';
        lightningProp.srNumber = '99999';
        lightningProp.industry = 'Hospital'; 
        lightningProp.companyName = 'TestCompany';
        return lightningProp;
    }
}