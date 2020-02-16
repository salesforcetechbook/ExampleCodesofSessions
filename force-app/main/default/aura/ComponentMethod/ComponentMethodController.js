({
	retrieveAccounts : function(component, event, helper) {
        var params = event.getParam('arguments');
        var actcallback;
        if (params) {
            actcallback = params.callback;           
        }
		 var action = component.get("c.getAccountRecords");
        action.setParams({objName:params.objectName,fields:params.fieldName});
        action.setCallback(this,function(response){
            var records = response.getReturnValue();
            actcallback(records);
        });
        $A.enqueueAction(action);
	}
})