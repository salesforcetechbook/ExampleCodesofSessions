({
	handleClick : function(component, event, helper) {
		//component.set("v.result",parseInt(component.get("v.firstNumber"))+parseInt(component.get("v.secondNumber")));
			var sum = parseInt(component.get("v.firstNumber"))+parseInt(component.get("v.secondNumber"));
        	var appEvent = $A.get("e.c:CalculatorAppEvent");
            appEvent.setParams({"sumresult":sum});
            appEvent.fire();
    }
})