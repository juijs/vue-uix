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
            "Group Item #1",
            "Group Item #2",
            "Group Item #3"
        ],
        index: 0
    },
    methods: {
        onOpenEvent: function(index, e) {
            this.index = index;
        },
        onFoldEvent: function(index, e) {
            this.index = null;
        }
    }
});