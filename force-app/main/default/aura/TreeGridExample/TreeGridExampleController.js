({
    doInit: function (cmp, event, helper) {
        cmp.set('v.gridColumns', [
            {label: 'name', fieldName: 'name', type: 'text'},
            {label: 'label', fieldName: 'label', type: 'text'},
            ]);
        helper.getData(cmp);
    },
            
   
})