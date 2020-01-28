<template>
    <div class="q-pa-md column items-start q-gutter-y-md" v-if="fileContentAfterPromise">
        <gpx-converter v-for="(file,index) in fileContentAfterPromise" :content=file :key="index" @return="returned"></gpx-converter>
        <q-btn v-if="fileToDL" @click="download()" color="primary" icon="file_copy" label="Download KML" />
    </div>
</template>
<script>
    import GpxConverter from "./GpxConverter"
    import createFile from "../util/createFile"
    export default {
        name: 'CreateKml',
        data() {
            return {
                fileContentAfterPromise: null,
                returnCounter: 0,
                returnedStrings: [],
                fileToDL: null,
            }
        },
        props: {
            files: {
                type: Array,
                required: true,

            }
        },
        created() {
            let content = []
            for (let f of this.files)
                content.push(f.text())
            Promise.all(content).then(c => this.fileContentAfterPromise = c)
        },
        components: {
            GpxConverter
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
