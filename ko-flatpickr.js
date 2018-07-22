ko.bindingHandlers.datepickr = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        let valueSubscription;
        let pickr;
        let allBindings = allBindingsAccessor();
        let config = Object.assign({
            defaultDate: ko.unwrap(allBindings.value) || null, // null is the library default
            dateFormat: "m/d/Y",
            altInput: true
        }, valueAccessor());        

        pickr = new flatpickr(element, config);

        ko.utils.domNodeDisposal.addDisposeCallback(element, (el) => {
            pickr.destroy();
            if (valueSubscription) {
                valueSubscription.dispose();
            }
        });
    }
}

ko.bindingHandlers.timepickr = {
    init: function (element, valueAccessor, allBindingsAccessor) {
        let valueSubscription;
        let pickr;
        let allBindings = allBindingsAccessor();
        let config = Object.assign({
            defaultDate: ko.unwrap(allBindings.value) || null, // null is the library default
            enableTime: true,
            noCalendar: true,
            time_24hr: false,
            altInput: true,
        }, valueAccessor());

        pickr = new flatpickr(element, config);

        ko.utils.domNodeDisposal.addDisposeCallback(element, (el) => {
            pickr.destroy();
            if (valueSubscription) {
                valueSubscription.dispose();
            }
        });
    }
}