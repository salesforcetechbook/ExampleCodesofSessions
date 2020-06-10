({
    handleChanged: function(cmp, message, helper) {        
        if (message != null && message.getParam("recordId") != null) {
            cmp.set("v.accountIdfrmMsgChannel", message.getParam("recordId"));
        }
    }
})