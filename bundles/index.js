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
        now: "2018/09/01"
    },
    methods: {
        onChangeEvent: function(date, e) {
            this.now = date;
        },
        onPrevEvent: function(e) {
            console.log("prev");
        },
        onNextEvent: function(e) {
            console.log("next");
        }
    }
});