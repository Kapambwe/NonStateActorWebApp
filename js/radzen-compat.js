// Compatibility bridge for cached Radzen DatePicker component assets.
// Some cached Radzen component assemblies request createDatePicker even when
// the currently loaded Radzen JavaScript bundle does not expose it.
(function () {
    window.Radzen = window.Radzen || {};
    if (typeof window.Radzen.createDatePicker === 'function') return;

    window.Radzen.createDatePicker = function (element, popupId, instance, callback) {
        if (!element) return { dispose: function () { } };

        var input = element.querySelector('.rz-inputtext');
        var button = element.querySelector('.rz-datepicker-trigger');
        var open = function (event, condition) {
            if (condition && typeof window.Radzen.togglePopup === 'function') {
                window.Radzen.togglePopup(
                    event.currentTarget.parentNode,
                    popupId,
                    false,
                    instance,
                    callback,
                    true,
                    false);
            }
        };

        if (button) {
            button.onclick = function (event) {
                open(event,
                    !event.currentTarget.classList.contains('rz-state-disabled') &&
                    (!input || !input.classList.contains('rz-readonly')));
            };
        }

        if (input) {
            input.onclick = function (event) {
                open(event,
                    event.currentTarget.classList.contains('rz-input-trigger') &&
                    !event.currentTarget.classList.contains('rz-readonly'));
            };
        }

        return {
            dispose: function () {
                if (button) button.onclick = null;
                if (input) input.onclick = null;
            }
        };
    };
})();
