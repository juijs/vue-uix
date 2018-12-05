export default {
    install: function (Vue, options) {
        const UixTheme = (!options || !options.theme) ? `` : `.${options.theme}`;
        const UixModal = require(`./components/modal${UixTheme}.vue`);
        const UixComboBox = require(`./components/combobox${UixTheme}.vue`);
        const UixButton = require(`./components/button${UixTheme}.vue`);
        const UixTab = require(`./components/tab${UixTheme}.vue`);
        const UixDatePicker = require(`./components/datepicker${UixTheme}.vue`);
        const UixCalendar = require(`./components/calendar${UixTheme}.vue`);
        const UixSwitch = require(`./components/switch${UixTheme}.vue`);
        const UixDropdown = require(`./components/dropdown${UixTheme}.vue`);
        const UixAutocomplete = require(`./components/autocomplete${UixTheme}.vue`);
        const UixColorPicker = require(`./components/colorpicker${UixTheme}.vue`);
        const UixTree = require(`./components/tree${UixTheme}.vue`);
        const UixNotification = require(`./components/notification${UixTheme}.vue`);
        const UixAccordion = require(`./components/accordion${UixTheme}.vue`);
        const UixTimePicker = require(`./components/timepicker${UixTheme}.vue`);

        Vue.component(UixModal.default.name, UixModal.default);
        Vue.component(UixComboBox.default.name, UixComboBox.default);
        Vue.component(UixButton.default.name, UixButton.default);
        Vue.component(UixTab.default.name, UixTab.default);
        Vue.component(UixDatePicker.default.name, UixDatePicker.default);
        Vue.component(UixCalendar.default.name, UixCalendar.default);
        Vue.component(UixSwitch.default.name, UixSwitch.default);
        Vue.component(UixDropdown.default.name, UixDropdown.default);
        Vue.component(UixAutocomplete.default.name, UixAutocomplete.default);
        Vue.component(UixColorPicker.default.name, UixColorPicker.default);
        Vue.component(UixTree.default.name, UixTree.default);
        Vue.component(UixNotification.default.name, UixNotification.default);
        Vue.component(UixAccordion.default.name, UixAccordion.default);
        Vue.component(UixTimePicker.default.name, UixTimePicker.default);
    }
}