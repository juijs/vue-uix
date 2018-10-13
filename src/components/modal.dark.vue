<script>
    import UixModal from './js/modal'

    export default {
        name: 'uix-modal',
        extends: UixModal,
        props: {
            color: {
                type: String,
                required: false,
                default: '#a9a9a9'
            }
        }
    }
</script>