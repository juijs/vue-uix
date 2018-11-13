<template src="./html/button.html"></template>

<script>
    import Vue from 'vue'
    import UixButton from './js/button'
    import methods from '../base/methods'

    Vue.mixin({ mixins: [ methods ]});
    export default UixButton;
</script>