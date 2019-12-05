<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
    <div class="field">
        <label for="file" class="label">Upload File</label>
        <input type="file" ref="file" @change="selectFile">
        <span v-if="file" class="file-name">{{file.name}}</span>
    </div>

    <div class="field">
        <button class="button is-info">Send</button>
    </div>
  
  </form>
</template>

<script>
    import SimpleUpload from'./SimpleUpload.vue';
    import axios from 'axios';

    export default {
        name: "SimpleUpload",
        components: { 
            SimpleUpload 
        },
        data(){
            return {
                file: ""
            }
        },
        methods: {
            selectFile(){
                this.file = this.$refs.file.files[0];
            },
            async sendFile(){
                const formData = new FormData();
                formData.append('file', this.file);
                try {
                    await axios.post('/api/SimpleUpload', formData);
                } catch (err) {
                    console.log(err);
                }
                
            }
        }
    }
</script>

<style>

</style>