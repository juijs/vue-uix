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
            const _scopeId = this.$options._scopeId;

            if(_scopeId != undefined) {
                $(this.ui.root).find(selector).each(function () {
                    $(this).attr(_scopeId, true)
                });
            }
        }
    }
}