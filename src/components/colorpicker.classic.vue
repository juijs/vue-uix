<template src="./html/colorpicker.html"></template>

<script>
    import Vue from 'vue'
    import UixColorPicker from './js/colorpicker'
    import methods from '../base/methods'

    Vue.mixin({ mixins: [ methods ]});
    export default UixColorPicker;
</script>

<style scoped lang="less">
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/common.less";
    @import "~juijs-ui/src/styles/common.theme.less";
    @import "~juijs-ui/src/styles/colorpicker.less";
    @import "~juijs-ui/src/styles/colorpicker.theme.less";
    @import "~juijs-ui/src/styles/theme/classic.less";
</style>