import methods from '../../base/methods'
import JUI from 'juijs-ui'
import ComboComp from 'juijs-ui/src/components/combo'

JUI.use(ComboComp);

export default {
    name: 'uix-combo',
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
            default: 100
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
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.uix.reload();
            this.$el.children[0].innerHTML = newVal[0].text;
        },
        index: function(newVal, oldVal) {
            if(newVal > -1 && newVal < this.items.length) {
                this.uix.setIndex(newVal);
            }
        },
        value: function(newVal, oldVal) {
            if(this.containValue(newVal)) {
                this.uix.setValue(newVal);
            }
        },
        active: function(newVal, oldVal) {
            if(newVal) {
                this.uix.open();
            } else {
                this.uix.fold();
            }
        }
    },
    mounted: function() {
        const self = this;

        this.uix = JUI.create("ui.combo", this.$el, {
            index: this.index,
            value: this.value,
            width: this.width,
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
    }
}