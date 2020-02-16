({
	fetchAccounts : function(component, event, helper) {
        component.set('v.mycolumns', [
            	{label: 'Name', fieldName: 'linkName', type: 'url', typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
                {label: 'Industry', fieldName: 'Industry', type: 'text'},
                {label: 'Type', fieldName: 'Type', type: 'Text'}
            ]);
		var action = component.get("c.fetchAccts");
        action.setParams({
        });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var recordList = response.getReturnValue();  
                recordList.forEach(function(record){
                    record.linkName = '/'+record.Id;
                });
                component.set("v.acctList", recordList);
            }
        });
        $A.enqueueAction(action);
	}
})