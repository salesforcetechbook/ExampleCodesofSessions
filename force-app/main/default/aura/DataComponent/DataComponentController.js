({
	loadRecords : function(component, event, helper) {
        component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'},           
        ]);
		var action = component.get("c.retrieveDetails");
        action.setParams({sobjectName:component.get("v.ObjectName")});
        action.setCallback(this,function(response){
           	var actrecords = response.getReturnValue();
            component.set("v.records",actrecords)
            
        });
       $A.enqueueAction(action);    
	}
})