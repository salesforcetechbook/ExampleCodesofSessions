({
	retrieveAccounts : function(component, event, helper) {
        var params = event.getParam('arguments');
        var accountResponse;
        if (params) {
            accountResponse = params.callback;           
        }
		var action = component.get("c.getAccounts");
        action.setCallback(this,function(response){
            var records = response.getReturnValue();
            alert('records;'+records);
             if (accountResponse) accountResponse(response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})