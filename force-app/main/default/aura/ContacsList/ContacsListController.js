({
	doSave : function(component, event, helper) {
		var action = component.get("c.createContact");
        var contactList = component.get("v.contactList");
        action.setParams({'contObj':component.get('v.contactObj')});        
        action.setCallback(this,function(data){           
            component.set('v.contactId',data.getReturnValue())
            contactList.splice(0,0,component.get('v.contactObj'));
            component.set("v.contactList",contactList);     
        });        
        $A.enqueueAction(action);
	},
    showContacts : function(component, event, helper) {       
		var action = component.get("c.retrieveContacts");        
        action.setCallback(this,function(data){            
            component.set('v.contactList',data.getReturnValue())
        });
        
        $A.enqueueAction(action);
	},
    
})