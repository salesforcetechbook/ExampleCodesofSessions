({
	searchKeyChangeHandler : function(component, event, helper) {
        var fundFilterChangeEvent = $A.get("e.c:FundFilterChange");
        fundFilterChangeEvent.setParams({
            "searchKey": event.getParam("value")
        });
        fundFilterChangeEvent.fire();
	},

    assetClassChangeHandler : function(component, event, helper) {
        var fundFilterChangeEvent = $A.get("e.c:FundFilterChange");
        fundFilterChangeEvent.setParams({
            "assetClass": event.getParam("value")
        });
        fundFilterChangeEvent.fire();
	},

    sectorChangeHandler : function(component, event, helper) {
        var fundFilterChangeEvent = $A.get("e.c:FundFilterChange");
        fundFilterChangeEvent.setParams({
            "sector": event.getParam("value")
        });
        fundFilterChangeEvent.fire();
	},

})