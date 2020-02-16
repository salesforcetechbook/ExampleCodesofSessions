({
	loadSectors : function(component) {
        var action = component.get("c.getSectors");
    	action.setCallback(this, function(response) {
            var sectors = response.getReturnValue();
            sectors.unshift({Name: ''});
            window.DataCache.setData("sectors", sectors);
            component.set("v.sectors", sectors);
            console.log("Sectors retrieved from server");
    	});
    	$A.enqueueAction(action);
	}

})