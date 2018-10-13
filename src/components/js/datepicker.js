import JUI from 'juijs-ui'
import DatePickerComp from 'juijs-ui/src/components/datepicker'

JUI.use(DatePickerComp);

export default {
    name: 'uix-datepicker',
    props: {
        template: {
            type: String,
            required: false,
            default: "<td><!= date !></td>"
        },
        titleFormat: {
            type: String,
            required: false,
            default: "yyyy.MM"
        },
        dateFormat: {
            type: String,
            required: false,
            default: "yyyy-MM-dd"
        },
        date: {
            type: String,
            required: false,
            default: null
        }
    },
    computed: {
        parsingTpl: function () {
            return this.template.split("<td>").join("<td " + this.$options._scopeId + ">");
        },
        dateObj: function() {
            return (this.date == null) ? new Date() : new Date(this.date);
        }
    },
    watch: {
        date: function(newVal, oldVal) {
            this.uix.select(newVal);
        }
    },
    mounted: function() {
        const self = this;

        this.uix = JUI.create("ui.datepicker", this.$el, {
            titleFormat: this.titleFormat,
            format: this.dateFormat,
            date: this.dateObj,
            tpl: {
                date: this.parsingTpl
            },
            event: {
                select: function(data, e) {
                    if(!e) return;

                    self.$emit('change', data, e);
                },
                prev: function(e) {
                    if(!e) return;

                    self.$emit('prev', e);
                },
                next: function(e) {
                    if(!e) return;

                    self.$emit('next', e);
                }
            }
        });
    }
}