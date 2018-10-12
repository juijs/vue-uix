export default {
    install: function (Vue, options) {
        const UixCombo = require(`./components/combo.${options.theme}.vue`);
        Vue.component(UixCombo.default.name, UixCombo.default);
    }
}