({
	loadContacts : function(component, event, helper) {
		var action = component.get("c.retrieveValues");
        action.setCallback(this,function(response){
            var values=[];
            var result = response.getReturnValue();           
            for(var key in result){
                values.push({                   
                    label:result[key],
                    value:key});     				
            }
            component.set("v.options",values);
            
        });
        $A.enqueueAction(action);
	}
})