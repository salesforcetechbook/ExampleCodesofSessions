@RestResource(urlMapping='/AccountCreator/*')
global without sharing class  Ecom_KM_cls_GuestFeedBack{
     @HttpPost
     global static String createFeedBack(AccountParser  accountObj){
           Account actObj = new Account();
           actObj.Name = accountObj.Name;
           actObj.Type = accountObj.Type;
           insert actObj;
           return actObj.Id;
     }   
}