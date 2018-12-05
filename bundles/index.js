/* bundling type : vue + vue-uix + juijs */

import Vue from 'vue'

// import UixButton from '../src/components/button'
// import UixButton from '../src/components/button.classic'
// Vue.component(UixButton.name, UixButton);

import VueUix from '../src/main'
Vue.use(VueUix, { theme: "classic" });

window.vm = new Vue({
    el: "#app",
    data: function() {
        return {
            topYear: 2015,
            topMonth: 11,
            topDate: 2,
            bottomYear: 2020
        }
    },
    methods: {
        onChangeValue: function(data) {
            console.log(data);
            this.topYear = data.year;
            // this.topMonth = data.month;
            // this.topDate = data.date;
        }
    }
});