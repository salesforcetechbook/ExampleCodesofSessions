({
	handleChange : function(component, event, helper) {
		var compEvent = component.getEvent("msgEvent");
        compEvent.setParams({"selectedVal":component.get("v.selOption")});
        compEvent.fire();
	}
})