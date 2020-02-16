({
	callAuraMethodServerTrip : function(component, event, helper) {
		 var childCmp = component.find("child");
        // call the aura:method in the child component    
        alert(callme('hello how are you'));
        childCmp.echo(function(result) {
            console.log("callback for aura:method was executed");
            console.log("result: " + result);
            var records = [];           
            component.set("v.accountRecords",result);           
        },'Contact','Contact Records');
	},
    scriptsLoaded : function (component,event,helper){
         $('[data-toggle="tooltip"]').tooltip(); 
    }
})