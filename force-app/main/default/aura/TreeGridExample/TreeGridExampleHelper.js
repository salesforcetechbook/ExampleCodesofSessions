({
    getData : function (cmp) {
        var action = cmp.get("c.getTreeGridData");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var data = response.getReturnValue();
                var temojson = JSON.parse(JSON.stringify(data).split('items').join('_children'));
                console.log(temojson);
                cmp.set('v.gridData', JSON.parse(temojson));
            }
            // error handling when state is "INCOMPLETE" or "ERROR"
        });
        $A.enqueueAction(action);
    }
})