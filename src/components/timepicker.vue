<template src="./html/timepicker.html"></template>

<script>
    import UixTimePicker from "./js/timepicker";
    import methods from "../base/methods";

    UixTimePicker.mixins = [ methods ];
    export default UixTimePicker;
</script>