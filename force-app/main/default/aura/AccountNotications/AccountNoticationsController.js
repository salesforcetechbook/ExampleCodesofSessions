({
	subscribe : function(component, event, helper) {
		 component.set('v.notifications', []);
         const empApi = component.find('empApi');
         const channel = '/event/Account_Creation_Event__e';
         // Replay option to get new events
    	 const replayId = -1;
        // Subscribe to an platform event 
        empApi.subscribe(channel, replayId, $A.getCallback(eventReceived => {
        	// Process event (this is called each time we receive an event)
        	console.log('Received event ', JSON.stringify(eventReceived));
       		console.log('Received event ', eventReceived.data.payload.Account_Name__c); 
          	const notifications = component.get('v.notifications');
          	notifications.push(eventReceived.data.payload.Account_Name__c);
          	component.set('v.notifications', notifications);
            component.set('v.evntRecieved',true);
    	})).then(subscription => {
       		 // Confirm that we have subscribed to the event channel.
        	// We haven't received an event yet.
            console.log('Subscribed to channel ', subscription.channel);
            // Save subscription to unsubscribe later
            //component.set('v.subscription', subscription);
    	});
          
	}
})