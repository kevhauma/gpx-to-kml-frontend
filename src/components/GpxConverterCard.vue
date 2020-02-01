<template>
    <q-card class="card" v-if="gpx">
        <q-card-section>
            <div class="text-h6">{{gpx.name}}</div>
            <div class="text-subtitle2">{{gpx.date.toDateString()}}</div>
        </q-card-section>
        <gpx-converter :content="gpx.data" @return="returned">
        </gpx-converter>
    </q-card>
</template>
<script>
    import GPX from "gpx-parse"
    import GpxConverter from './GpxConverter'
    export default {
        name: 'GpxConverterCard',
        data() {
            return {
                gpx: null,
            }
        },
        props: {
            gpxString: {
                type: String,
            },
        },
        components: {
            GpxConverter
        },
        created() {
            GPX.parseGpx(this.gpxString, (error, data) => {
                if (error) throw error
                
                if (!data) throw ("no data found")
                this.gpx = {
                    name: data.tracks[0].name,
                    date: data.metadata.time,
                    data: data,
                }
                console.log(data)
                
                
            })
        },
        computed: {

        },
        methods: {
            returned(string) {
                this.$emit("returned", string)
            }

        },
    }

</script>
<style>
    .card {
        flex: 150px;
        height: 350px;
    }

</style>
