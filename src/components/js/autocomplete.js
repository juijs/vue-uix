import JUI from 'juijs-ui'
import DropdownComp from 'juijs-ui/src/components/dropdown'
import AutocompleteComp from 'juijs-ui/src/components/autocomplete'

JUI.use(DropdownComp, AutocompleteComp);

export default {
    name: 'uix-autocomplete',
    props: {
        icon: {
            type: String,
            required: false,
            default: ''
        },
        width: {
            type: Number,
            required: false,
            default: 150
        },
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
        },
        template: {
            type: String,
            required: false,
            default: '<div class="dropdown" style="display: block;"><ul><! for(var i = 0; i < words.length; i++) { !><li><!= words[i] !></li><! } !></ul></div>'
        },
        items: {
            type: Array,
            required: true
        },
        value: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        parsingTpl: function () {
            let tpl = this.template.split("<div>").join("<div " + this.$options._scopeId + ">");
            tpl = tpl.split("<ul>").join("<ul " + this.$options._scopeId + ">");
            tpl = tpl.split("<li>").join("<li " + this.$options._scopeId + ">");
            return tpl;
        },
        style: function() {
            return {
                width: (typeof(this.width) == "number") ? this.width+"px" : this.width
            }
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.ui.reload();
            this.$el.children[0].innerHTML = newVal[0].text;
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.autocomplete", this.$el, {
            target: this.icon === '' ? null : "input[type=text]",
            words: this.items,
            event: {
                change: function(text, e) {
                    if(!e) return;

                    self.$emit("change", text, e);
                }
            },
            tpl: {
                words: this.parsingTpl
            }
        });
    }
}