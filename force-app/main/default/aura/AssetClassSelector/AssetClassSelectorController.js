({
	afterScriptsLoaded : function(component, event, helper) {
        var assetClasses = window.DataCache.getData("assetClasses");
        if (assetClasses) {
            console.log('Asset classes retrieved from custom cache');
            component.set("v.assetClasses", assetClasses);
        } else {
	    	helper.loadAssetClasses(component);    
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