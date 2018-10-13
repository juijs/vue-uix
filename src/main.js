export default {
    install: function (Vue, options) {
        const UixTheme = (!options || !options.theme) ? `` : `.${options.theme}`;
        const UixCombo = require(`./components/combo${UixTheme}.vue`);
        const UixButton = require(`./components/button${UixTheme}.vue`);
        const UixModal = require(`./components/modal.vue`);

        Vue.component(UixCombo.default.name, UixCombo.default);
        Vue.component(UixButton.default.name, UixButton.default);
        Vue.component(UixModal.default.name, UixModal.default);
    }
}