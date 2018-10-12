export default {
    methods: {
        containValue: function(value) {
            for (let data of this.items) {
                if (value == data.value) {
                    return true;
                }
            }

            return false;
        }
    }
}