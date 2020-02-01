<template>
    <div class="q-pa-md column items-start q-gutter-y-md">
        <q-btn v-if="fileToDL" @click="download()" color="primary" icon="file_copy" label="Download KML" />
        <gpx-converter-card v-for="(gpx,index) in gpxs" :gpxString=gpx :key="index" @return="returned"></gpx-converter-card>
    </div>
</template>
<script>
    import GpxConverterCard from "./GpxConverterCard"
    import createFile from "../util/createFile"
    export default {
        name: 'CreateKml',
        data() {
            return {
                returnCounter: 0,
                returnedStrings: [],
                fileToDL: null,
            }
        },
        props: {
            gpxs: {
                type: Array,
                required: true,

            }
        },
        components: {
            GpxConverterCard
        },
        methods: {
            returned(string) {
                this.returnedStrings.push(string)
                if (++this.returnCounter >= this.files.length) {
                    this.fileToDL = createFile(this.returnedStrings.join("\n"))
                }
            },
            download() {
                //https://stackoverflow.com/questions/31656782/create-big-downloable-file-from-string-variable-in-html-javascript
                const link = document.createElement('a')

                let createObjectURL = (window.URL || window.webkitURL || {}).createObjectURL || function() {};
                let blob = null;
                let content = "byte array or string";
                let mimeString = "application/octet-stream";
                window.BlobBuilder = window.BlobBuilder ||
                    window.WebKitBlobBuilder ||
                    window.MozBlobBuilder ||
                    window.MSBlobBuilder;


                if (window.BlobBuilder) {
                    let bb = new BlobBuilder();
                    bb.append(this.fileToDL);
                    blob = bb.getBlob(mimeString);
                } else {
                    blob = new Blob([this.fileToDL], {
                        type: mimeString
                    });
                }

                let url = createObjectURL(blob);

                link.href = url
                link.setAttribute('download', 'Google Earth.kml')
                document.body.appendChild(link)
                link.click()
            }


        },
    }

</script>
