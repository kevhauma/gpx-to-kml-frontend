<template>
    <div class="q-pa-md  items-start q-gutter-y-md">
        <div v-if="!access_code">
            <h5>Retrieving Acces to Strava</h5>

            <div>
                <q-spinner-bars color="primary" size="5.5em" />
            </div>
        </div>
        <div v-if="access_code">            
            <h5>Downloading Activities from {{name}}</h5>
            <activity-downloader :ac="access_code" :athlete="athlete">
            </activity-downloader>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import ActivityDownloader from '../components/ActivityDownloader'
    export default {
        data() {
            return {
                access_code: null,
                name: null,
                athlete: null,
            }
        },
        components:{
            ActivityDownloader
        },
        created() {
            this.getAccess()
                .then(({name,ac,id}) => {
                    this.access_code = ac
                    this.name = name
                this.athlete = id
                console.log(ac,id)
                })
                .catch(e => console.log(e))
        },
        methods: {
            async getAccess() {
                let code = this.$route.query.code

                let result = await axios.get(`https://strava-code-to-token.herokuapp.com/?code=${code}`)
                let data = result.data
                return {
                    ac: data.access_token,
                    name: `${data.athlete.firstname} ${data.athlete.lastname}`,
                    id: data.athlete.id
                }
            }
        }
    }

</script>

<style>


</style>
