<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" icon="menu" aria-label="Menu" />

                <q-toolbar-title>
                    <a href="/" class="titleAnchor">
                        GPX to KML
                    </a>
                </q-toolbar-title>


                <q-btn flat round dense :icon="darkModeIcon" @click="darkToggle()" class="q-mr-xs" />
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
                <q-item-label header>Essential Links</q-item-label>
                <q-item clickable tag="a" to="/info">
                    <q-item-section avatar>
                        <q-icon name="school" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Info</q-item-label>
                        <q-item-label caption>more info about this project</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" target="_blank" href="https://github.com/kevhauma/gpx-to-kml-frontend">
                    <q-item-section avatar>
                        <q-icon name="code" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Github</q-item-label>
                        <q-item-label caption>github.com/kevhauma</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" target="_blank" href="https://www.instagram.com/junior.pics/">
                    <q-item-section avatar>
                        <q-icon name="party_mode" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Instagram</q-item-label>
                        <q-item-label caption>@junior.pics</q-item-label>
                    </q-item-section>
                </q-item>
                <q-item clickable tag="a" target="_blank" href="https://www.google.be/intl/nl_ALL/earth/versions/#download-pro">
                    <q-item-section avatar>
                        <q-icon name="public" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>Google Earth</q-item-label>
                        <q-item-label caption>download the desktop version</q-item-label>
                    </q-item-section>
                </q-item>

            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
    import { Dark } from 'quasar'
    export default {
        name: 'MyLayout',

        data() {
            return {
                leftDrawerOpen: false,
                darkModeIcon: "brightness_3",
            }
        },
        methods: {
            darkToggle() {
                Dark.toggle()

                this.darkModeIcon = Dark.isActive ? "brightness_3" : "wb_sunny"
            }
        }
    }

</script>
<style>
    .titleAnchor{
        text-decoration: none;
        
    }
</style>