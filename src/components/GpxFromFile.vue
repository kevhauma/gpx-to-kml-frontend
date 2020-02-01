<template>
    <div class="q-pa-md column items-start q-gutter-y-md" v-if="fileContentAfterPromise">
        <create-kml v-if="fileContentAfterPromise" :gpxs="fileContentAfterPromise"></create-kml>
    </div>
</template>
<script>
    import CreateKml from "./CreateKml"
    export default {
        name: 'GpxFromFile',
        data() {
            return {
                fileContentAfterPromise: null,
            }
        },
        props: {
            files: {
                type: Array,
                required: true,

            }
        },
        created() {
            let content = []
            console.log(this.files)
            for (let f of this.files)
                content.push(f.text())
            Promise.all(content).then(c => {
                this.fileContentAfterPromise = c
            })
        },
        components: {
            CreateKml
        },
        methods: {



        },
    }

</script>
