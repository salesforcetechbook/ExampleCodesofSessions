({
	echo : function(component, event, helper) {
		var params = event.getParam('arguments');
        var callbackMethod;
        if (params) {
            callbackMethod = params.callback;
        }
        var action = component.get("c.getAccounts");
        action.setParams({objName:params.objectName});
        action.setCallback(this,function(response){
             if (callbackMethod) callbackMethod(response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})