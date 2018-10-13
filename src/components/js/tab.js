import JUI from 'juijs-ui'
import TabComp from 'juijs-ui/src/components/tab'

JUI.use(TabComp);

export default {
    name: 'uix-tab',
    props: {
        type: {
            type: String,
            required: false,
            default: 'tab' // or pill
        },
        position: {
            type: String,
            required: false,
            default: 'top' // or bottom
        },
        items: {
            type: Array,
            required: true
        },
        index: {
            type: Number,
            required: false,
            default: 0
        },
        disable: {
            type: Array,
            required: false,
            default: null
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.uix.update(newVal);
        },
        index: function(newVal, oldVal) {
            this.uix.show(newVal);
        },
        disable: function(newVal, oldVal) {
            for(let i = 0; i < this.items.length; i++) {
                if(newVal.includes(i)) {
                    this.uix.disable(i);
                } else {
                    this.uix.enable(i);
                }
            }
        }
    },
    mounted: function() {
        const self = this;

        this.uix = JUI.create("ui.tab", this.$el, {
            index: this.index,
            event: {
                'change': function(data, e) {
                    if(!e) return;

                    self.$emit('change', data, e);
                }
            }
        });
    }
}