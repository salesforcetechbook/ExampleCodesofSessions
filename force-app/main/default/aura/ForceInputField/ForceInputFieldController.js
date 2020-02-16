({
	doInit : function(component, event, helper) {
        var action = component.get("c.getContact");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                alert('hi');
                component.set("v.contact", response.getReturnValue());
                console.log(response.getReturnValue());
                alert(response.getReturnValue());
            }
         });
         $A.enqueueAction(action); 
    }   
})