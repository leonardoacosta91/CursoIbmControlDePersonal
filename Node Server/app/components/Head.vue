<template>
    <div>
        <h1>{{ title }}</h1>
        <h2>{{ subtitle }}</h2>
        <nav class="navbar">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
                <li><a href="/upload">Upload Image</a></li>
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
        }
    },
}
</script>

<style>

</style>