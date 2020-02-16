({
    jsLoaded: function(component, event, helper) {
        var min = parseInt(component.get("v.min"), 10);
        var max = parseInt(component.get("v.max"), 10);
        var step = parseInt(component.get("v.step"), 10);
        
        var slider = component.find('slider').getElement();
        noUiSlider.create(slider, {
            start: [min, max],
            connect: true,
            tooltips: true,
            step: step,
            format: {
                to: function (value ) {
					return Math.round(value) + '%';
                },
                from: function ( value ) {
                    return value;
                }
            },
            range: {
                'min': min,
                'max': max
            }
        });
        
		slider.noUiSlider.on('change', $A.getCallback(function(range) {
            var myEvent = $A.get("e.c:RangeChange");
        	myEvent.setParams({
                "filterName": component.get("v.filterName"),
            	"minValue": range[0].replace('%', ''),
            	"maxValue": range[1].replace('%', '')
            });
			myEvent.fire();
        }));
    }
})