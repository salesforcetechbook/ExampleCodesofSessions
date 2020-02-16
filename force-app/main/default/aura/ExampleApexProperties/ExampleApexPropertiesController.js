({
	myAction : function(component, event, helper) {            
		var action = component.get("c.getDetails");
        action.setCallback(this,function(response){            
            component.set("v.wrapRecord",response.getReturnValue());
        });
        $A.enqueueAction(action);
	}
})