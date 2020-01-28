<template>
    <q-page class="main-page">
         <strava></strava>
        <file-dropper></file-dropper>
       
    </q-page>
</template>

<script>
    import FileDropper from '../components/FileDropper'
    import Strava from '../components/Strava'
    export default {
        name: 'PageIndex',
        components: {
            FileDropper,Strava
        }
    }

</script>

<style>
    .main-page{
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
    }
</style>