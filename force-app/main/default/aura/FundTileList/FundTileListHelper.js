({
	loadFunds : function(component, page) {
        var action = component.get("c.getFunds");
        action.setStorable();
		var pageSize = component.get("v.pageSize");
		action.setParams({
      		"filters": JSON.stringify(component.get("v.filterObject")),
            "pageSize": pageSize,
            "pageNumber": page || 1
    	});
    	action.setCallback(this, function(response) {
            console.log('# getFunds callback %f', (performance.now() - startTime));
			var result = response.getReturnValue();
            component.set("v.funds", result.funds);
            component.set("v.page", result.page);
            component.set("v.total", result.total);
            component.set("v.pages", Math.ceil(result.total/pageSize));
    	});
        var startTime = performance.now();
    	$A.enqueueAction(action);
	}
})