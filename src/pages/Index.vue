<template>
    <q-page class="flex flex-center">
        <file-dropper></file-dropper>
    </q-page>
</template>

<script>
    import FileDropper from '../components/FileDropper'
    export default {
        name: 'PageIndex',
        components: {
            FileDropper
        }
    }

</script>
