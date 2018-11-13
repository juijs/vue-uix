<template src="./html/button.html"></template>

<script>
    import Vue from 'vue'
    import UixButton from './js/button'
    import methods from '../base/methods'

    Vue.mixin({ mixins: [ methods ]});
    export default UixButton;
</script>

<style scoped lang="less">
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/common.less";
    @import "~juijs-ui/src/styles/common.theme.less";
    @import "~juijs-ui/src/styles/icon.less";
    @import "~juijs-ui/src/styles/icon.theme.less";
    @import "~juijs-ui/src/styles/button.less";
    @import "~juijs-ui/src/styles/button.theme.less";
    @import "~juijs-ui/src/styles/theme/classic.less";
</style>