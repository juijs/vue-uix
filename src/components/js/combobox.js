import methods from '@uix/base/methods'
import JUI from 'juijs-ui'
import ComboComp from 'juijs-ui/src/components/combo'

JUI.use(ComboComp);

export default {
    name: 'uix-combobox',
    mixins: [ methods ],
    props: {
        index: {
            type: Number,
            required: false,
            default: 0
        },
        value: {
            type: String,
            required: false,
            default: ''
        },
        width: {
            type: Number,
            required: false,
            default: 0
        },
        height: {
            type: Number,
            required: false,
            default: 100
        },
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
        },
        keydown: {
            type: Boolean,
            required: false,
            default: false
        },
        flex: {
            type: Boolean,
            required: false,
            default: true
        },
        position: {
            type: String,
            required: false,
            default: 'bottom' // or top
        },
        title: {
            type: String,
            required: false,
            default: 'Selected...'
        },
        items: {
            type: Array,
            required: true
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        realWidth: function() {
            return this.width == 0 ? "auto" : this.width;
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.ui.reload();
            this.$el.children[0].innerHTML = newVal[0].text;
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
        },
        active: function(newVal, oldVal) {
            if(newVal) {
                this.ui.open();
            } else {
                this.ui.fold();
            }
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.combo", this.$el, {
            index: this.index,
            value: this.value,
            width: this.realWidth,
            height: this.height,
            keydown: this.keydown,
            flex: this.flex,
            position: this.position,
            event: {
                'change': function(data, e) {
                    if(!e) return;

                    self.$emit('change', data, e);
                }
            }
        });

        if(this.active) this.ui.open();
    }
}