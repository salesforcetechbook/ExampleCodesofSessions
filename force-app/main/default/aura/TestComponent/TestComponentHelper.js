({
	helperAdditionMethod : function(component, event) {
		var firstNumber = parseInt(component.get("v.fNumber"));
        var secondNumber = parseInt(component.get("v.sNumber"));        
        var addition = component.get("c.getAdditionResult");
        addition.setParams({"fstNumber":firstNumber,"secNumber":secondNumber});
        addition.setCallback(this,function(response){
            var addResult = response.getReturnValue();            
            component.set("v.result",addResult);
        });        
        $A.enqueueAction(addition);
	}
})