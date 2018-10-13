import JUI from 'juijs-ui'
import ModalComp from 'juijs-ui/src/components/modal'

JUI.use(ModalComp);

export default {
    name: 'uix-modal',
    template: '<span></span>',
    props: {
        root: {
            type: String,
            required: true
        },
        target: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            required: false,
            default: false
        },
        color: {
            type: String,
            required: false,
            default: 'black'
        },
        opacity: {
            type: Number,
            required: false,
            default: 0.4
        },
        zIndex: {
            type: Number,
            required: false,
            default: 0
        },
        autoHide: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    watch: {
        active: function(newVal, oldVal) {
            if(newVal) {
                this.uix.show();
                this.uix.resize();
            } else {
                this.uix.hide();
            }
        }
    },
    mounted: function() {
        this.uix = JUI.create("ui.modal", this.target, {
            target: this.root,
            color: this.color,
            opacity: this.opacity,
            index: this.zIndex,
            clone: this.clone,
            autoHide: this.autoHide
        });

        if(this.active) {
            this.uix.show();
            this.uix.resize();
        }
    }
}