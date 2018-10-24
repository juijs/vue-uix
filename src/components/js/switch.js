import JUI from 'juijs-ui'
import SwitchComp from 'juijs-ui/src/components/switch'

JUI.use(SwitchComp);

export default {
    name: 'uix-switch',
    props: {
        inside: {
            type: Boolean,
            required: false,
            default: true
        },
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
        },
        checked: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    watch: {
        checked: function(newVal, oldVal) {
            this.ui.setValue(newVal);
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.switch", this.$el, {
            checked: this.checked,
            event: {
                change: function(value) {
                    self.$emit("change", value);
                }
            }
        });
    }
}