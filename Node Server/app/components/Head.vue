<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <nav class="navbar">
            <ul id="main-menu" class="nav navbar-nav">
            <template v-for="item in menu.items">
                <li> {{ item.name }} </li>
                <li class="divider" role="presentation"></li>
            </template>
            </ul>
            
            
        </nav>
    </div>
</template>

<script>


export default {

    
    components: { },
    data(){
        return {
            title: "Header",
            subtitle: "working on it",
            menu: {
                items: [
                    {name: 'Upload access cam', link: '/upload', sub: null},
                    {name: 'Upload exit cam', link: '/exit', sub: null},
                    {name: 'view Registries', link: '/viewRegistries', sub: null},
                    {name: 'view Today', link: '/viewToday', sub: null}
                ]
            }
        }
    },
}
</script>

<style>

</style>