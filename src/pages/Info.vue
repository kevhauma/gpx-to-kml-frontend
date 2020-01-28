<template>
    <q-page class="infopage">
        <h5>How</h5>
        <p>
    <ol>
        <li>Downlaod all your gpx files</li>
        <li>Install <a href="https://www.google.be/intl/nl_ALL/earth/versions/#download-pro">Google Earth</a></li>
        <li>Drop all your gpx files here</li>
        <li>Let the page generate a Google Earth Compatible KML file</li>
        <li>Download the KML file</li>
        <li>Open the file in Google Earth</li>
        <li>Enjoy all your routes</li>
    </ol>
        </p>
        <h5>Why</h5>
        <p>Because importing GPX files into google earth is cumbersome. Routes are nested in multiple folder, submenu is hard to find,...</p>
        <h5>What</h5>
        <p>This web page is made with VueJs and Quasar framework, GPX parser is with the <a href="https://www.npmjs.com/package/gpx-parse">gpx-parse</a> npm package</p>
        <h5>Open-source</h5>
        <p>You can find the source code in my <a href="https://github.com/kevhauma/">github page</a> in <a href="https://github.com/kevhauma/gpx-to-kml-frontend">this repo</a></p>
        <h5>Who</h5>
        <p>I'm a student at Karel de Grote hogeschool in Antwerp, Belgium. Studying applied IT and tooling around with web development in my freetime. </p>
        <h5>Ugly</h5>
        <p><q>This website is rubbish! It burns my eyes!</q> My apologies, I'm a developer, not a designer. </p>
    </q-page>
</template>
<style>
    .infopage{
        margin: 20px;
    }
</style>