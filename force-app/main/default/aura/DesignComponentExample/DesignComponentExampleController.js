({
	loadRecords : function(component, event, helper) {      
         component.set('v.columns', [
            {label: 'Name', fieldName: 'Name', type: 'text'}            
        ]);
        var objName = component.get("v.objectName");
		var action=component.get("c.retrieveDetails");
        action.setParams({"sobjectName":objName});
        action.setCallback(this,function(response){
            var records = response.getReturnValue();
            component.set("v.recordsList",records);
        });
        $A.enqueueAction(action);
	}
})