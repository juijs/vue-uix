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
            { text: "Java" },
            { text: "JavaScript" },
            { text: "CSS" },
            { text: "SCSS" }
        ],
        index: 1,
        disable: []
    },
    methods: {
        onChangeEvent: function(data, e) {
            this.index = data.index;

            console.log(data.index)
        }
    }
});