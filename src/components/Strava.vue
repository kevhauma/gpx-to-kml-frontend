<template>
    <div class="q-pa-md  items-start q-gutter-y-md">
        <h5>Get Files from Strava Activities</h5>
        <q-btn class="strava" label="Login with Strava" type="a" :href="AuthLink">
            <q-avatar size="42px">
                <img src="../assets/strava.png">
            </q-avatar>
        </q-btn>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                client_id: "43070",
                responseURL: "http://localhost:8080/exchange",
                scope: "activity:read"
            }
        },
        computed: {
            AuthLink() {
                return `http://www.strava.com/oauth/authorize?client_id=${this.client_id}&response_type=code&scope=${this.scope}&approval_prompt=force&redirect_uri=${this.responseURL}`
            }
        }
    }

</script>

<style>
    .strava {
        background-color: rgb(252, 82, 0)
    }

</style>
