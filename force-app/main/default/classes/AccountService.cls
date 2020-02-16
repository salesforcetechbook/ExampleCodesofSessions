@RestResource(urlMapping='/AccountRecord/*')
global with sharing class AccountService {
    @HttpGet
	global static void getAccountById() {
		String jsonString;
        //get parameters .
        String accountId = RestContext.request.params.get('accountId');
        Account actObj = [select id,name,type,industry from Account where id=:accountId];
       	jsonString = JSON.serialize(actObj);
        RestContext.response.addHeader('Content-Type', 'application/json');
        RestContext.response.responseBody = Blob.valueOf(jsonString);       
    }
}