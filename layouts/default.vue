<template>
    <div class="app-container">

        <TheHeader/>

        <TheSideNav/>

        <TheSearch/>

        <div class="app-content">
            <nuxt />
        </div>

        <TheFooter/>

    </div>
</template>

<script>

    export default {

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        },

        watch: {
            '$route': function() {
                if (process.client && this.isSidebar && window.innerWidth < 768) {
                    this.$store.dispatch('nav/toggleSidebar')
                }
            },
        }

    }

</script>

<style>
    html, body{
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .app-container{
        height: 100%;
        display: grid;
        margin: 0;
        padding: 0;
    }
    .app-content{
        height: 95%;
        margin: 50px 0 0 0;
        padding: 10px 0 0 0;
        display: grid;
    }
</style>
