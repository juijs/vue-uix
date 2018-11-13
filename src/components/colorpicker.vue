<template src="./html/colorpicker.html"></template>

<script>
    import Vue from 'vue'
    import UixColorPicker from './js/colorpicker'
    import methods from '../base/methods'

    Vue.mixin({ mixins: [ methods ]});
    export default UixColorPicker;
</script>