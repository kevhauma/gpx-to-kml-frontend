<template>
    <div class="filedropper">
        
        <q-btn round color="primary" icon="refresh" @click="refresh" class="top-right" />
        
        <div v-if="picking">
            <h5>Pick files from PC</h5>
            <q-file :value="files" accept=".gpx" counter :counter-label="counterLabelFn" icon="note_add" ref="fileInput" @input="updateFiles" label="Pick files" multiple style="min-width:400px">
                <!--accept=".gpx"-->
                <template v-slot:file="{ index, file }">
                    <q-chip class="full-width q-my-xs " square >
                        <div class="ellipsis relative-position ">
                            {{ file.name }}
                        </div>
                        
                        <q-tooltip>
                            {{ file.name }}
                        </q-tooltip>
                    </q-chip>
                </template>
                <template v-slot:prepend>
                    <q-icon name="attach_file" />
                </template>
            </q-file>
            <q-btn v-if="files" @click="generate" color="primary" icon="file_copy" label="Generate KML" />
        </div>
        <div v-if="!picking">
            <gpx-from-file :files=files>

            </gpx-from-file>
        </div>
    </div>
</template>
<script>
    import GpxFromFile from "./GpxFromFile"
    export default {
        name: 'FileDropper',
        data() {
            return {
                files: null,
                picking: true
            }
        },
        components: {
            GpxFromFile
        },
        methods: {
            updateFiles(files) {
                this.files = files
            },
            generate() {
                this.picking = false
            },
            refresh() {
                this.files = null
                this.picking = true
            },
            counterLabelFn({
                totalSize,
                filesNumber
            }) {
                return `${filesNumber} files | ${totalSize}`
            }
        }
    }

</script>
<style>
    .top-right {
        position: absolute;
        top: 5px;
        right: 5px;
    }
</style>
