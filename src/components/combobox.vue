<template src="./html/combobox.html"></template>

<script>
    import Vue from 'vue'
    import UixComboBox from './js/combobox'
    import methods from '../base/methods'

    Vue.mixin({ mixins: [ methods ]});
    export default UixComboBox;
</script>