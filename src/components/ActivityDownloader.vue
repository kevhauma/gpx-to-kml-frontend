<template>
    <div class="cards">
        <activity-download v-if="activities" v-for="activity in activities" :key="activity.id" :ac="ac" :activity="activity"></activity-download>

    </div>
</template>
<script>
    import axios from 'axios'
    import activityDownload from './activityDownload'
    export default {
        name: 'ActivityDownloader',
        data() {
            return {
                activities: null,
            }
        },
        components: {
            activityDownload
        },
        props: {
            ac: String,
            athlete: Number,
        },
        created() {
            let getConfig = {
                headers: {
                    Authorization: `Bearer ${this.ac}`
                }
            }
            axios.get(`https://www.strava.com/api/v3/athletes/${this.athlete}/activities?per_page=100`, getConfig)
                .then((res) => {
                    this.activities = res.data.map(a => {
                        return {
                            id: a.id,
                            name: a.name,
                            date: a.start_date_local,
                            distance: a.distance
                        }
                    })

                }).catch(e => {
                    console.log(e)
                })
        },
        computed: {

        },
        methods: {


        },
    }

</script>
<style>
    .cards {
        display: flex;
        flex-wrap: wrap;
    }

</style>
