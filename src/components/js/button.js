import methods from '@uix/base/methods'
import JUI from 'juijs-ui'
import ButtonComp from 'juijs-ui/src/components/button'

JUI.use(ButtonComp);

export default {
    name: 'uix-button',
    mixins: [ methods ],
    props: {
        type: {
            type: String,
            required: false,
            default: 'radio' // or check
        },
        index: {
            type: Number,
            required: false,
            default: 0
        },
        value: {
            type: [ String, Array ],
            required: false,
            default: ''
        },
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
        },
        items: {
            type: Array,
            required: true
        }
    },
    data: function() {
        return {
            isBtnGroup: this.items.length > 1
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.ui.reload();
        },
        index: function(newVal, oldVal) {
            if(newVal > -1 && newVal < this.items.length) {
                this.ui.setIndex(newVal);
            }
        },
        value: function(newVal, oldVal) {
            if(this.containValue(newVal)) {
                this.ui.setValue(newVal);
            }
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.button", this.$el, {
            type: this.type,
            index: this.index,
            value: this.value,
            event: {
                'change': function(data, e) {
                    if(!e) return;

                    if(data.length) {
                        let values = [],
                            indexes = [];

                        for (let i = 0; i < data.length; i++) {
                            if (data[i]) {
                                values.push(data[i].value);
                                indexes.push(data[i].index);
                            }
                        }

                        self.$emit('change', {
                            value: values,
                            index: indexes
                        }, e);
                    } else {
                        self.$emit('change', data, e);
                    }
                }
            }
        });
    }
}