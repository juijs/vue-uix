import UixDatePicker from './datepicker'

export default {
    name: 'uix-calendar',
    extends: UixDatePicker,
    props: {
        width: {
            type: [ String, Number ],
            required: false,
            default: "100%"
        },
        height: {
            type: [ String, Number ],
            required: false,
            default: "100%"
        }
    },
    computed: {
        style: function() {
            return {
                width: (typeof(this.width) == "number") ? this.width+"px" : this.width,
                height: (typeof(this.height) == "number") ? this.height+"px" : this.height
            }
        }
    }
}