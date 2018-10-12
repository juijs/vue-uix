export default {
    install: function (Vue, options) {
        const UixTheme = (!options || !options.theme) ? `` : `.${options.theme}`;
        const UixCombo = require(`./components/combo${UixTheme}.vue`);

        Vue.component(UixCombo.default.name, UixCombo.default);
    }
}