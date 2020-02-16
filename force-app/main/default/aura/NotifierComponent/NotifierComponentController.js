({
	handleChange : function(component, event, helper) {
		var compEvent = component.getEvent("messageEvent");
        compEvent.setParams({"selectedVal":component.get("v.selOption")});
        compEvent.fire();
	}
})