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
        // tab options
        tabs: [
            { text: "Java" },
            { text: "JavaScript" },
            { text: "CSS" },
            { text: "SCSS", button: true }
        ],
        tabIndex: 1,

        // button options
        buttons: [
            { icon: "", text: "A", value: "1", style: { width: "70px" } },
            { icon: "", text: "B", value: "2", style: { width: "70px" } },
            { icon: "", text: "C", value: "3", style: { width: "70px" } },
            { icon: "home", text: "Home", value: "home", focus: true },
            { icon: "gear", text: "Gear", value: "gear" },
            { icon: "help", text: "", value: "help" }
        ]
    },
    methods: {
        onChangeTab: function(data, e) {
            if (data.index !== 3)
                this.tabIndex = data.index;
            else {
                alert("button click@@");
                e.preventDefault();
            }
        },
        onChangeMenu: function() {
            alert("button click@@");
                e.preventDefault();
        }
    }
});