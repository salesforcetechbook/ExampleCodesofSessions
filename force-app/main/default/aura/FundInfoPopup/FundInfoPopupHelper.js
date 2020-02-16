({
	color : function(component, auraId, value) {
        var c = component.find(auraId);
        if (c.getElement) {
            var el = c.getElement();
            if (value<0) {
                $A.util.addClass(el, 'red');
                $A.util.removeClass(el, 'green');
            } else {
                $A.util.removeClass(el, 'red');
                $A.util.addClass(el, 'green');
            }
        }
	}
})