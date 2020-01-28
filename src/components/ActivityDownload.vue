<template>
    <q-card class="card">
        <q-card-section>
            <div class="text-h6">{{activity.name}}</div>
            <div class="text-subtitle2">{{(activity.distance / 1000).toFixed(2)}}km</div>            
        </q-card-section>
        <gpx-converter v-if="gpxString" :content="gpxString">
        </gpx-converter>
    </q-card>
</template>
<script>
    import axios from 'axios'
    import GpxConverter from './GpxConverter'
    import polyline from '@mapbox/polyline'
    export default {
        name: 'ActivityDownloader',
        data() {
            return {
                activities: null,
                gpxString: null,
            }
        },
        props: {
            activity: {
                type: Object,
            },
            ac: String,
        },
        components:{
            GpxConverter
        },
        created() {
            let getConfig = {
                headers: {
                    Authorization: `Bearer ${this.ac}`
                }
            }
            axios.get(`https://www.strava.com/api/v3/activities/${this.activity.id}`, getConfig)
                .then((res) => {
                let pl = res.data.map.polyline
                let decoded = polyline.decode(pl, 6)
                this.gpxString = this.createGPXfromPoint(decoded)
                }).catch(e => {
                    console.log(e)
                })
        },
        computed: {

        },
        methods: {
            createGPXfromPoint(points){
                let gpx= `<?xml version='1.0' encoding='UTF-8' ?>
<gpx version="1.1" creator="S Health_0.2" n0:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" xmlns="http://www.topografix.com/GPX/1/1" n1:xsi="http://www.w3.org/2001/XMLSchema-instance" n1:gpx1="http://www.topografix.com/GPX/1/0" n1:ogt10="http://gpstracker.android.sogeti.n1/GPX/1/0" xmlns:n0="xsi" xmlns:n1="xmlns">
  <metadate>${this.activity.date}</metadate>
    <trk>
      <name>${this.activity.name}</name>
      <trkseg>`
                points.forEach(p=>{
                    gpx += `
        <trkpt lat="${p[0]}" lon="${p[1]}">
        <ele>0</ele>
        <time>${this.activity.date}</time>
      </trkpt>`
                })
                
                gpx += `
    </trkseg>
  </trk>
  <exerciseinfo>
    <distance>${this.activity.distance}</distance>
  </exerciseinfo>
</gpx>`
                return gpx
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
