/* bundling type : vue + vue-uix + juijs */

import Vue from 'vue'

// import UixCombo from '../src/components/combo'
// import UixCombo from '../src/components/combo.classic'
// Vue.component(UixCombo.name, UixCombo);

import VueUix from '../src/main'
Vue.use(VueUix, { theme: "dark" });

window.vm = new Vue({
    el: "#app",
    data: {
        items: [
            { text: "한국", value: "ko" },
            { text: "미국", value: "en" },
            { text: "일본", value: "ja" },
            { text: "중국", value: "zh" },
            { text: "프랑스", value: "fr" }
        ],
        value: "en",
        active: false
    },
    methods: {
        onChangeEvent: function(data, e) {
            this.value = data.value;
        }
    }
});