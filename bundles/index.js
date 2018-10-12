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
            { icon: "", text: "A", value: "1", style: { width: "70px" } },
            { icon: "", text: "B", value: "2", style: { width: "70px" } },
            { icon: "", text: "C", value: "3", style: { width: "70px" } },
            { icon: "home", text: "Home", value: "home", focus: true },
            { icon: "gear", text: "Gear", value: "gear" },
            { icon: "help", text: "", value: "help" }
        ],
        style: {
            width: 200
        },
        value: [ "home", "help" ]
    },
    methods: {
        onChangeEvent: function(data, e) {
            this.value = data.value;
        }
    }
});