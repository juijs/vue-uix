import $ from 'jquery'
import JUI from 'juijs-ui'
import Accordion from 'juijs-ui/src/components/accordion'

JUI.use(Accordion);

export default {
    name: 'uix-accordion',
    props: {
        type: {
            type: String,
            required: false,
            default: '' // or simple
        },
        items: {
            type: Array,
            required: true
        },
        index: {
            type: Number,
            required: false,
            default: null
        },
        autoFold: {
            type: Boolean,
            required: false,
            default: false
        },
        width: {
            type: [ Number, String ],
            required: false,
            default: '100%'
        }
    },
    computed: {
        style: function() {
            return {
                width: (typeof(this.width) == "number") ? this.width+"px" : this.width
            }
        }
    },
    mounted: function() {
        const self = this;

        this.uix = JUI.create("ui.accordion", this.$el, {
            index: this.index,
            autoFold: this.autoFold,
            event: {
                open: function(index, e) {
                    if(!e) return;

                    $(this.root).find("i").attr("class", "icon-arrow1");
                    $(e.target).find("i").attr("class", "icon-arrow3");
                    self.$emit("open", index, e);
                },
                fold: function(index, e) {
                    if(!e) return;

                    $(e.target).find("i").attr("class", "icon-arrow1");
                    self.$emit("open", index, e);
                }
            }
        });
    }
}