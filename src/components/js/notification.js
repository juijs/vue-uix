import $ from "jquery";
import JUI from 'juijs-ui'
import NotifyComp from 'juijs-ui/src/components/notify'

JUI.use(NotifyComp);

export default {
    name: 'uix-notification',
    template: '<span></span>',
    props: {
        root: {
            type: String,
            required: true
        },
        position: {
            type: String,
            required: false,
            default: "top-right" // top, top-left, top-right, bottom, bottom-left, bottom-right
        },
        items: {
            type: Array,
            required: false,
            default: null
        },
        template: {
            type: String,
            required: false,
            default: '<div class="notify <!= status !>">%image<div class="title"><!= title !></div><div class="message"><!= message !></div></div>'
        },
        icon: {
            type: String,
            required: false,
            default: ''
        },
        delay: {
            type: Number,
            required: false,
            default: 3000
        },
        showDuration: {
            type: Number,
            required: false,
            default: 500
        },
        hideDuration: {
            type: Number,
            required: false,
            default: 500
        },
        padding: {
            type: Number,
            required: false,
            default: 12
        },
        distance: {
            type: Number,
            required: false,
            default: 5
        }
    },
    computed: {
        parsingTpl: function () {
            let tpl = (this.icon === '') ? '' : '<div class="image"><i class="icon-help"></i></div>';
            return this.template.split("%image").join(tpl);
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.callNotifications(newVal);
        }
    },
    methods: {
        replaceScopedHash: function() {
            const self = this;

            $(this.root).attr(self.$options._scopeId, true).find("div,i").each(function() {
                $(this).attr(self.$options._scopeId, true)
            });
        },
        callNotifications: function(items) {
            while(items.length > 0) {
                const item = items.shift();
                this.ui.add(item);
            }

            this.replaceScopedHash();
        }
    },
    mounted: function() {
        const self = this;

        // TODO: 알림이 발생한 엘리먼트의 position 스타일 값을 변경한다.
        $(this.root).css("position", "relative");

        this.ui = JUI.create("ui.notify", this.root, {
            position: this.position,
            timeout: this.delay,
            padding: this.padding,
            distance: this.distance,
            showDuration: this.showDuration,
            hideDuration: this.hideDuration,
            event: {
                select: function(data, e) {
                    if(!e) return;

                    self.$emit("change", data, e);
                },
                show: function(data) {
                    self.$emit("show", data);
                },
                hide: function(data) {
                    self.$emit("hide", data);
                }
            },
            tpl: {
                item: this.parsingTpl
            }
        });

        this.callNotifications(this.items);
    }
}