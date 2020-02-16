({
    doInit: function(component, event, helper) {
        var filterObject = {
            searchKey: '',
            sector: '',
            assetClass: '',
            minYtdReturn: -30,
            maxYtdReturn: 30,    
            min1YearReturn: -30, 
            max1YearReturn: 30,    
            min5YearReturn: -30,    
            max5YearReturn: 30  
        }
        component.set("v.filterObject", filterObject);
        helper.loadFunds(component);
    },
    
	onPreviousPage: function(component, event, helper) {
		var page = component.get("v.page") || 1;
        var direction = event.getParam("direction");
        page = page - 1;
        helper.loadFunds(component, page);
	},

	onNextPage: function(component, event, helper) {
		var page = component.get("v.page") || 1;
        var direction = event.getParam("direction");
        page = page + 1;
        helper.loadFunds(component, page);
	},
    
    fundFilterChangeHandler: function(component, event, helper) {
        var filterObject = component.get("v.filterObject");
        if (event.getParam("searchKey") !== undefined) {
	        filterObject.searchKey = event.getParam("searchKey");
        }
        if (event.getParam("assetClass") !== undefined) {
            filterObject.assetClass = event.getParam("assetClass");
        }
        if (event.getParam("sector") !== undefined) {
            var sector = event.getParam("sector");
	        filterObject.sector = event.getParam("sector");
        }
        console.log(filterObject);
        helper.loadFunds(component);
    },

    rangeChange: function(component, event, helper) {
		var filterName = event.getParam("filterName");
        var minValue = event.getParam("minValue");
        var maxValue = event.getParam("maxValue");
        var filterObject = component.get("v.filterObject");
        if (filterName === 'ytd-return') {
	        filterObject.minYtdReturn = minValue;
	        filterObject.maxYtdReturn = maxValue;
        } else if (filterName === '1-year-return') {
	        filterObject.min1YearReturn = minValue;
	        filterObject.max1YearReturn = maxValue;
        } else if (filterName === '5-year-return') {
	        filterObject.min5YearReturn = minValue;
	        filterObject.max5YearReturn = maxValue;
        }
        helper.loadFunds(component);
    },
    
	onMouseMove: function(component, event, helper) {
        if (event.target === event.currentTarget) return;
        var el = event.target;
        while (el && (!el.dataset || !el.dataset.id)) {
            el = el.parentElement;
        }
        if (el) {
			var funds = component.get("v.funds");
            component.find("popup").showPopup(funds[el.dataset.id], event.clientX + 20, el.offsetTop - 46);
        }
    },

    onMouseLeave: function(component, event, helper) {
        if (event.target === component.find("list").getElement()) {
	        component.find("popup").hidePopup();    
        }
    }

})