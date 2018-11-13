<template src="./html/tree.html"></template>

<script>
    import Vue from 'vue'
    import UixTree from './js/tree'
    import methods from '../base/methods'

    Vue.mixin({ mixins: [ methods ]});
    export default UixTree;
</script>