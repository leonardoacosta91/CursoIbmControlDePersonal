<template>
    <div>
        <div class="container">
          <h1 class="title">ToDo List</h1>
            <div class="row pt-5">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="sendTask">
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
                            </form>
                        </div>
                    </div>
                </div>

            <div class="col-md-7    ">



                <table class="table table-bordered">
                    <thead>
                    <tr>
                        <th>Task</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr  v-for="(value, index) in tasks" v-bind:key="index">
                        <td>{{value.title}}</td>
                        <td>{{value.description}}</td>
                        <td>
                  <button @click="deleteTask(task._id)" class="btn btn-danger">Delete</button>
                  <button @click="editTask(task._id)" class="btn btn-secondary">
                    Edit
                  </button>
                </td>
                    </tr>
                    </tbody>
                </table>
             </div>
           </div>
        </div>
    </div>
</template>

<script>

class Task {
  constructor(title = '', description = '') {
    this.title = title;
    this.description = description;
  }
}

export default {
        data(){
            return {
                task: new Task(),
                tasks: [],
                edit: false,
                taskToEdit: ''
            }
        },
        created() {
            this.getTasks();
        },
        methods: {
            sendTask() {
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
      }
    },
            getTasks() {
                fetch('/api/tasks')
                .then(res => res.json())
                .then(data => {
                    this.tasks = data;
                });
            },
            editTask(taskId) {
              console.log('editing');
                fetch('/api/tasks/' + taskId)
                .then(res => res.json())
                .then(data => {
                    const { _id, title, description } = data;
                    this.task = new Task(title, description);
                    this.taskToEdit = _id;
                    this.edit = true;
                });
            },
            deleteTask(taskId) {
                fetch('/api/tasks/' + taskId, {
                    method: 'DELETE',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getTasks();
                });
            }
        }
    }
</script>

<style>

</style>