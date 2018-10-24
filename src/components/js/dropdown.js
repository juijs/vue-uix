import JUI from 'juijs-ui'
import DropdownComp from 'juijs-ui/src/components/dropdown'

JUI.use(DropdownComp);

export default {
    name: 'uix-dropdown',
    props: {
        index: {
            type: Number,
            required: false,
            default: 0
        },
        width: {
            type: Number,
            required: false,
            default: 0
        },
        height: {
            type: Number,
            required: false,
            default: 0
        },
        left: {
            type: Number,
            required: false,
            default: 0
        },
        top: {
            type: Number,
            required: false,
            default: 0
        },
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
        },
        items: {
            type: Array,
            required: true
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        },
        autoClose: {
            type: Boolean,
            required: false,
            default: true
        },
        anchor: {
            type: Boolean,
            required: false,
            default: false
        },
        keydown: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.ui.reload();
        },
        active: function(newVal, oldVal) {
            if(newVal) {
                this.ui.show();
            } else {
                this.ui.hide();
            }
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.dropdown", this.$el, {
            keydown: this.keydown,
            width: this.width,
            height: this.height,
            left: this.left,
            top: this.top,
            close: this.autoClose,
            event: {
                'change': function(data, e) {
                    if(!e) return;

                    self.$emit('change', { index: parseInt(data.value), text: data.text }, e);
                }
            }
        });

        if(this.active) this.ui.show();
    }
}