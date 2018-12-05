<template src="./html/timepicker.html"></template>

<script>
    import UixTimePicker from "./js/timepicker";
    import methods from "../base/methods";

    UixTimePicker.mixins = [ methods ];
    export default UixTimePicker;
</script>

<style scoped lang="less">
    @import "~juijs-ui/src/styles/base/mixins.less";
    @import "~juijs-ui/src/styles/common.less";
    @import "~juijs-ui/src/styles/common.theme.less";
    @import "~juijs-ui/src/styles/icon.less";
    @import "~juijs-ui/src/styles/icon.theme.less";
    @import "~juijs-ui/src/styles/timepicker.less";
    @import "~juijs-ui/src/styles/timepicker.theme.less";
    @import "~juijs-ui/src/styles/datepicker.less";
    @import "~juijs-ui/src/styles/datepicker.theme.less";
    @import "~juijs-ui/src/styles/theme/dark.less";
    @import "./less/timepicker.less";
</style>