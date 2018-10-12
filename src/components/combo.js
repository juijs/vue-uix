import JUI from 'juijs-ui'
import ComboComp from 'juijs-ui/src/components/combo'

JUI.use(ComboComp);

export default {
    name: 'uix-combo',
    props: {
        width: {
            type: Number,
            required: false,
            default: 100
        },
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
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
            width: self.width,
            event: {
                'change': function(data, e) {
                    self.$emit('change', data, e);
                }
            }
        });
    }
}