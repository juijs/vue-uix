/* bundling type : vue + vue-uix + juijs */

import Vue from 'vue'

// import UixButton from '../src/components/button'
// import UixButton from '../src/components/button.classic'
// Vue.component(UixButton.name, UixButton);

import VueUix from '../src/main'
Vue.use(VueUix, { theme: "classic" });

window.vm = new Vue({
    el: "#app",
    data: {
        checked: false
    },
    methods: {
        onChangeEvent: function(value, e) {
            this.checked = value;
        }
    }
});