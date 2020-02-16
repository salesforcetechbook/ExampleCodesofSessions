@RestResource(urlMapping='/AccountDetails/*')
global class CM_AccountService {
	 @HttpGet
     global static void getAccountById() {
         String jsonString = '';
          String accountId = RestContext.request.params.get('accountId');
         Account actObj = [select id,name,type,industry from Account where id=:accountId];
         jsonString = JSON.serialize(actObj);
         RestContext.response.addHeader('Content-Type', 'application/json');
         RestContext.response.responseBody = Blob.valueOf(jsonString);
     }
}