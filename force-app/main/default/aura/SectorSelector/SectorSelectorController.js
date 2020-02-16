({
	afterScriptsLoaded : function(component, event, helper) {
        var sectors = window.DataCache.getData("sectors");
        if (sectors) {
            console.log('Sectors retrieved from custom cache');
            component.set("v.sectors", sectors);
        } else {
	    	helper.loadSectors(component);    
        }
	},
    
    changeHandler : function(component, event, helper) {
        var changeEvent = component.getEvent("onchange");
        changeEvent.setParams({
            "value": component.get("v.selectedValue")
        });
        changeEvent.fire();
    }

})