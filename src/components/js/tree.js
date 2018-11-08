import methods from '../../base/methods'
import JUI from 'juijs-ui'
import TreeComp from 'juijs-ui/src/components/tree'

JUI.use(TreeComp);

export default {
    name: 'uix-tree',
    mixins: [ methods ],
    props: {
        type: {
            type: String,
            required: false,
            default: 'line' // or line-file, arrow, arrow-file
        },
        rootName: {
            type: String,
            required: true
        },
        rootHide: {
            type: Boolean,
            required: false,
            default: false
        },
        rootFold: {
            type: Boolean,
            required: false,
            default: false
        },
        template: {
            type: String,
            required: false,
            default: "<li><div><i></i> <!= text !></div><ul></ul></li>"
        },
        items: {
            type: Array,
            required: true
        },
        item: {
            type: Object,
            required: false,
            default: null
        }
    },
    computed: {
        parsingTpl: function () {
            const _scopeId = this.$options._scopeId;
            if(_scopeId == undefined) return this.template;

            let tpl = this.template.split("<li>").join("<li " + _scopeId + ">");
            tpl = tpl.split("<div>").join("<div " + _scopeId + ">");
            tpl = tpl.split("<ul>").join("<ul " + _scopeId + ">");
            return tpl;
        }
    },
    watch: {
        items: function(newVal, oldVal) {
            if(newVal.length == 0) return;

            this.ui.update(this.createTreeData(newVal));
            this.replaceScopedHash("i");
        },
        item: function(newVal, oldVal) {
            this.selectTreeNode(newVal);
        }
    },
    methods: {
        createTreeData: function(items) {
            let treeData = [];

            for(let i = 0; i < items.length; i++) {
                treeData.push({
                    index: items[i].index,
                    data: {text: items[i].text}
                });
            }

            return treeData;
        },
        selectTreeNode: function(item) {
            if(item != null) this.ui.select(item.index);
            else this.ui.unselect();
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create("ui.tree", this.$el, {
            root: {
                text: this.rootName
            },
            rootHide: this.rootHide,
            rootFold: this.rootFold,
            event: {
                'change': function(node, e) {
                    if(!e) return;

                    this.select(node.index);
                    self.$emit('change', { index: node.index, text: node.data.text }, e);
                },
                'open': function(node, e) {
                    if(!e) return;

                    self.$emit('open', { index: node.index, text: node.data.text }, e);
                    self.replaceScopedHash("i");
                },
                'fold': function(node, e) {
                    if(!e) return;

                    self.$emit('fold', { index: node.index, text: node.data.text }, e);
                    self.replaceScopedHash("i");
                }
            },
            tpl: {
                node: this.parsingTpl
            }
        });

        this.ui.update(this.createTreeData(this.items));
        this.replaceScopedHash("i");
        this.selectTreeNode(this.item);
    }
}