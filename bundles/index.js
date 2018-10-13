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
            { text: "한국", index: 0 },
            { text: "미국", index: 1 },
            { text: "일본", index: 2 },
            { text: "중국", index: 3 },
            { text: "프랑스", index: 4 }
        ],
        index: 1,
        active: true
    },
    methods: {
        onChangeEvent: function(data, e) {
            this.index = data.index;
            alert(data.text);
        },
        onClickButtonEvent: function() {
            this.active = !this.active;
        }
    }
});