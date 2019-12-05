<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">HOME</a>
        </nav>
        <div class="section">

            <h1 class="title" @change="selectFile" ref="file">Image Upload</h1>

            <div class="container">

                <simple-upload/>
            
                <div class="row pt-5">
                    <div class="col-md-4">
                        <div class="card">
                            <div class="card-body">
                                <!-- <form @submit.prevent="sendTask">
                    <div class="form-group">
                    <input type="text" v-model="task.title" class="form-control" placeholder="Insert A Task">
                    </div>
                    <div class="form-group">
                    <textarea v-model="task.description" cols="30" rows="10" placeholder="Insert A Description" class="form-control"></textarea>
                    </div>
                                    <template v-if="edit === false">
                    <button class="btn btn-primary btn-block">Send</button>
                    </template>
                    <template v-else>
                    <button class="btn btn-primary btn-block">Edit</button>
                    </template>
                                </form> -->
                            </div>
                        </div>
                    </div>

                <div class="col-md-7    ">
                    <table class="table table-bordered">
                        <thead>
                        <tr>
                            <th>Task</th>
                            <th>Description</th>
                        </tr>
                        </thead>
                        <!-- <tbody>
                        <tr v-for="task of tasks">
                            <td>{{task.title}}</td>
                            <td>{{task.description}}</td>
                            <td>
                    <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                    <button @click="editTask(task._id)" class="btn btn-secondary">
                        Edit
                    </button>
                    </td>
                        </tr>
                        </tbody> -->
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
    import SimpleUpload from'./SimpleUpload.vue';

    class ImageUpload {
        constructor(source = '', createdAt = '') {
            this.source = source;
            this.createdAt = createdAt;
        }
    }

    export default {
        name: "ImageUpload",
        components: { SimpleUpload },

        data(){
            return {
                file: ""
                /* img: new ImageUpload(),
                imgs: [],
                edit: false,
                imgToEdit: '' */
            }
        },
        /* created() {
            this.getImages();
        }, */
        methods: {
            selectFile(){
                this.file = this.$refs.file.files[0];
            },
            sendImage() {
                /*             
                if(this.edit === false) {
                    fetch('/api/tasks', {
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getTasks();
                        this.task = new Task();
                    });
                }
                else {
                    fetch('/api/tasks/' + this.taskToEdit, {
                    method: 'PUT',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                    })
                    .then(res => res.json())
                    .then(data => {
                        this.getTasks();
                        this.task = new Task();
                        this.edit = !this.edit;
                    });
                } */
            },
            getImages() {
                /* 
                fetch('/api/tasks')
                .then(res => res.json())
                .then(data => {
                    this.tasks = data;
                }); */
            },
            editImage(imageId) {
                /* console.log('editing');
                fetch('/api/tasks/' + taskId)
                .then(res => res.json())
                .then(data => {
                    const { _id, title, description } = data;
                    this.task = new Task(title, description);
                    this.taskToEdit = _id;
                    this.edit = true;
                }); */
            },
            deleteImage(imageId) {
                /* fetch('/api/tasks/' + taskId, {
                    method: 'DELETE',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getTasks();
                }); */
            }
        }
    }
</script>

<style>

</style>