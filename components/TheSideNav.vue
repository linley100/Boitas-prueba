<!--
  Menu desplegable
  Contiene:

    -Menu desplegable.
-->
<template>
    <div class="sidenav-container">

        <div v-if="isSidebar" class="backdrop" @click="hideSidebar"></div>

        <transition name="slide-side">
            <div v-if="isSidebar" class="sidenav">
                <span @click="hideSidebar">X</span>
                <app-links/>
            </div>
        </transition>


    </div>
</template>

<script>

    export default {

        methods: {
            hideSidebar() {
                this.$store.dispatch('nav/toggleSidebar')
            }
        },

        computed: {

            isSidebar() {
                return this.$store.getters['nav/toggleSidebar']
            }

        }

    }

</script>
