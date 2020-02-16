({
	keypressHandler : function(component, event, helper) {
        if (event.keyCode !== 13) {
            return;
        }
        var changeEvent = component.getEvent("onchange");
        changeEvent.setParams({
            "value": event.target.value
        });
        changeEvent.fire();
	},

    clearHandler : function(component, event, helper) {
		component.find("searchInput").getElement().value = "";
        var changeEvent = component.getEvent("onchange");
        changeEvent.setParams({
            "value": ""
        });
        changeEvent.fire();
	}

})