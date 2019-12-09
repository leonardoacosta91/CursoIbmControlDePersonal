import Vue from 'vue';
import App from './components/App.vue';
import SimpleUpload from './components/SimpleUpload.vue';
import Head from './components/Head.vue';

new Vue({
    render: h => h(Head)
}).$mount('#head');

/* new Vue({
    render: h => h(App)
}).$mount('#app'); */

