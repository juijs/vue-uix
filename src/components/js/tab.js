import JUI from 'juijs-ui'
import DropdownComp from 'juijs-ui/src/components/dropdown'
import TabComp from 'juijs-ui/src/components/tab'

JUI.use(DropdownComp, TabComp);

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

            this.ui.update(newVal);
        },
        index: function(newVal, oldVal) {
            this.ui.show(newVal);
        },
        disable: function(newVal, oldVal) {
            for(let i = 0; i < this.items.length; i++) {
                if(newVal.includes(i)) {
                    this.ui.disable(i);
                } else {
                    this.ui.enable(i);
                }
            }
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.tab", this.$el, {
            index: this.index,
            event: {
                'change': function(data, e) {
                    if(!e) return;
                    
                    self.$emit('change', data, e);
                },
                'menu': function(data, e) {
                    self.$emit('change', data, e)
                }
            }
        });
    }
}