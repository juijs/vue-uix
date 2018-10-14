/* bundling type : vue + vue-uix + juijs */

import Vue from 'vue'

// import UixButton from '../src/components/button'
// import UixButton from '../src/components/button.classic'
// Vue.component(UixButton.name, UixButton);

import VueUix from '../src/main'
Vue.use(VueUix, { theme: "classic" });

const data = [
    { index: "0", text: "Windows" },
    { index: "0.0", text: "dll" },
    { index: "0.1", text: "zip" },
    { index: "1", text: "Download" }
];

window.vm = new Vue({
    el: "#app",
    data: {
        items: data,
        item: data[2]
    },
    methods: {
        onChangeEvent: function(item, e) {
            this.item = item;
        }
    }
});