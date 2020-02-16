({
	handleClick : function(component, event, helper) {
		var sum = parseInt(component.get("v.firstNumber"))+parseInt(component.get("v.secondNumber"));
        var eventObj = $A.get("e.c:CalculatorApplicationEvent");
        eventObj.setParams({"sumresult":sum});
        eventObj.fire();
	}
})