<template src="./html/colorpicker.html"></template>

<script>
    import UixColorPicker from "./js/colorpicker";
    import methods from "../base/methods";

    UixColorPicker.mixins = [ methods ];
    export default UixColorPicker;
</script>