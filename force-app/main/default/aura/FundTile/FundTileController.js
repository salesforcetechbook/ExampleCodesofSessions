({
	fundSelected : function(component, event, helper) {
		var fund = component.get("v.fund");
		var selectSObjectEvent = $A.get("e.ltng:selectSObject");
        selectSObjectEvent.setParams({"recordId": fund.Id});
        selectSObjectEvent.fire();
	},
    
})