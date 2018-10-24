import $ from "jquery";

export default {
    methods: {
        containValue: function(value) {
            for (let data of this.items) {
                if (value == data.value) {
                    return true;
                }
            }

            return false;
        },
        replaceScopedHash: function(selector) {
            const self = this;

            $(this.ui.root).find(selector).each(function() {
                $(this).attr(self.$options._scopeId, true)
            });
        }
    }
}