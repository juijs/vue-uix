<template src="./html/colorpicker.html"></template>

<script>
    import UixColorPicker from './js/colorpicker'
    import methods from '../base/methods'

    UixColorPicker.mixins = [ methods ];
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