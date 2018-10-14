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
        items: [
            // status : normal, info, warning, danger
            { status: "danger", title: "Caution message Send!!!", message: "Feb 15, 2013-12-24 02:24:19" }
        ]
    },
    methods: {
        onChangeEvent: function(item, e) {
            console.log(item, e);
        },
        onShowEvent: function(item) {
            console.log(item);
        }
    }
});