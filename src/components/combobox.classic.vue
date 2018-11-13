<template src="./html/combobox.html"></template>

<script>
    import UixComboBox from "./js/combobox";
    import methods from "../base/methods";

    UixComboBox.mixins = [ methods ];
    export default UixComboBox;
</script>

<style scoped lang="less">
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/common.less";
    @import "~juijs-ui/src/styles/common.theme.less";
    @import "~juijs-ui/src/styles/icon.less";
    @import "~juijs-ui/src/styles/icon.theme.less";
    @import "~juijs-ui/src/styles/button.less";
    @import "~juijs-ui/src/styles/button.theme.less";
    @import "~juijs-ui/src/styles/combo.less";
    @import "~juijs-ui/src/styles/combo.theme.less";
    @import "~juijs-ui/src/styles/theme/classic.less";
</style>