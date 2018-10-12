import JUI from 'juijs-ui'
import ComboComp from 'juijs-ui/src/components/combo'

JUI.use(ComboComp);

export default {
    name: 'uix-combo',
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
                    self.$emit('change', data, e);
                },
                'open': function(e) {
                    self.$emit('open', e);
                },
                'fold': function() {
                    self.$emit('fold');
                }
            }
        });
    }
}