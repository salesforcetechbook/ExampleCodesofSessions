({
	showPopup : function(component, event, helper) {
        var args = event.getParam('arguments');
        component.set("v.fund", args.fund);
		var popup = component.find('popup').getElement();
        helper.color(component, 'ytd', args.fund.YTD_Return__c);
        helper.color(component, 'oneYear', args.fund.One_Year_Return__c);
        helper.color(component, 'twoYear', args.fund.Two_Year_Return__c);
        helper.color(component, 'fiveYear', args.fund.Five_Year_Return__c);
        if (popup && popup.setAttribute) {
            popup.setAttribute("style", "left:" + args.x + "px;top:" + args.y + "px");
        }
        $A.util.removeClass(popup, 'slds-hidden');
	},
    
    hidePopup: function(component) {
        var popup = component.find('popup').getElement();
        $A.util.addClass(popup, 'slds-hidden');
    }
    
})