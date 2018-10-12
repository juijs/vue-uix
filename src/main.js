export default {
    install: function (Vue, options) {
        const UixTheme = (!options || !options.theme) ? `` : `.${options.theme}`;
        const UixCombo = require(`./components/combo${UixTheme}.vue`);
        const UixButton = require(`./components/button${UixTheme}.vue`);

        Vue.component(UixCombo.default.name, UixCombo.default);
        Vue.component(UixButton.default.name, UixButton.default);
    }
}