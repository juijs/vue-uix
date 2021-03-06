import JUI from 'juijs-ui'
import ColorPickerComp from 'juijs-ui/src/components/colorpicker'

JUI.use(ColorPickerComp);

export default {
    name: 'uix-colorpicker',
    props: {
        color: {
            type: [ String, Object ],
            required: false,
            default: '#FFF'
        }
    },
    watch: {
        color: function(newVal, oldVal) {
            if(newVal === oldVal) return;

            this.ui.setColor(newVal);
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.colorpicker", this.$el, {
            color: this.color,
            event: {
                change: function(hex, rgb) {
                    self.$emit('change', hex, rgb);
                }
            }
        });

        // 내부 마크업에 스타일 스코프 설정하기
        this.replaceScopedHash("input,div");
    }
}