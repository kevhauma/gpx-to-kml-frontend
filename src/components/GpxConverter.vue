<template>
    <div>
        <q-linear-progress size="25px" style="width:100%" :value="progress" color="accent">
            <div class="absolute-full flex flex-center">
                <q-badge color="white" text-color="accent" :label="progressLabel" />
            </div>
        </q-linear-progress>
    </div>
</template>
<script>
    export default {
        name: 'GpxConverter',
        data() {
            return {
                progress: 0,
                gpxname: null,
            }
        },
        props: {
            content: {
                type: Object
            },
        },
        created() {
            this.getKML()
        },
        methods: {
            getYYYYMMDD(date) {
                return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
            },
            getKML() {
                let date
                let trackTimes = []
                let trackPoints = []
                this.content.tracks.forEach(t => {
                    if (t.name) this.gpxname = t.name
                    let totalWp = t.segments.reduce((acc, curr) => acc += curr.length, 0)
                    t.segments.forEach(seg => {
                        seg.forEach(wp => {
                            let nwp = {
                                lat: wp.lat,
                                lon: wp.lon,
                                elevation: wp.elevation,
                                time: wp.time
                            }
                            trackTimes.push(nwp.time)
                            trackPoints.push({
                                lat: nwp.lat,
                                lon: nwp.lon,
                                ele: nwp.elevation
                            })
                            this.progress = trackPoints.length / totalWp
                            date = new Date(nwp.time)
                        })
                    })
                })
                let name = `${this.getYYYYMMDD(date)} ${this.gpxname.replace(".gpx","")}`
                let when = trackTimes.reduce((string, curr) => `${string}
                <when>${curr.toISOString()}</when>`, "")
                let coords = trackPoints.reduce((string, curr) => `${string}
                <gx:coord>${curr.lon} ${curr.lat} ${curr.ele}</gx:coord>`, "")

                let returnString = `
        <Placemark>
            <name>${name}</name>
            <gx:Track>${when}${coords}
            </gx:Track>
        </Placemark>`
                this.$emit("return", returnString)

            }
        },
        computed: {
            progressLabel() {
                return `${(this.progress*100).toFixed(2)}%`
            }
        }
    }

</script>
