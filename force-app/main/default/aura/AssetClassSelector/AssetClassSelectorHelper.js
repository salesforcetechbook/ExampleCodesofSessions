({
	loadAssetClasses : function(component) {
        var action = component.get("c.getAssetClasses");
    	action.setCallback(this, function(response) {
            var assetClasses = response.getReturnValue();
            assetClasses.unshift("");
            window.DataCache.setData("assetClasses", assetClasses);
            component.set("v.assetClasses", assetClasses);
            console.log("Asset classes retrieved from server");
    	});
    	$A.enqueueAction(action);
	}

})