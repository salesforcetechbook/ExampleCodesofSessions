({
	doSave : function(component, event, helper) {
		var action = component.get("c.createContact");
        action.setParams({'contObj':component.get('v.contactObj')});
        action.setCallback(this,function(data){           
            component.set('v.contactId',data.getReturnValue())
        });        
        $A.enqueueAction(action);
	}
})