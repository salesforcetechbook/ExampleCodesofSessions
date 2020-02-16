({
	myAction : function(component, event, helper) {
		var action = component.get("c.createContactwithAccountDetails");
        alert('current RecordId::'+component.get("v.recordId")); 
        var actRecId = component.get("v.recordId");
        action.setParams({'accountId':actRecId});
        action.setCallback(this,function(data){
            var result = data.getReturnValue();
             var state = data.getState();        
            if (state === 'SUCCESS'){
                var dismissActionPanel = $A.get("e.force:closeQuickAction");
        		dismissActionPanel.fire();
                 var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                resultsToast.fire();
                $A.get('e.force:refreshView').fire();
            } 
        });
        $A.enqueueAction(action);
	},
    handleClick : function(component, event, helper) {		
        var action = component.get("c.createContact");    
        component.set("v.contactObj.AccountId",component.get("v.recordId"));
        var contactRec = component.get("v.contactObj");
        action.setParams({'contObj':contactRec});
        action.setCallback(this,function(data){
            var result = data.getReturnValue();
             var state = data.getState();            
            if (state === 'SUCCESS'){
                var dismissActionPanel = $A.get("e.force:closeQuickAction");
        		dismissActionPanel.fire();
                 var resultsToast = $A.get("e.force:showToast");
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                resultsToast.fire();
                $A.get('e.force:refreshView').fire();
            } 
        });
        $A.enqueueAction(action);
	}
})