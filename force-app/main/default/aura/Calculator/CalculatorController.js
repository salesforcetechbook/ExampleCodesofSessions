({
	calculate : function(component, event, helper) {
		var fnumber = component.get("v.fnumber");       
        var snumber = component.get("v.snumber");      
        var action = component.get("c.calculateValues");
        action.setParams({"firstnumber":fnumber,"secondnumber":snumber});
        action.setCallback(this,function(response){
            var state = response.getState();
            //var valueFromResp = response.getReturnValue();           
            if(state === "SUCCESS"){
                component.set("v.result",response.getReturnValue()); 
            }
        });
        $A.enqueueAction(action);
	}
})