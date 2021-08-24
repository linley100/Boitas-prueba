<!--
  El buscador desplegable
  Contiene:

    -El buscador
-->
<template>
    <div class="search-container">

        <transition name="slide-side-top">
            <div v-if="isSearch" class="search">
                <input type="text" v-model="buscar" class="search-box" placeholder="¿Qué estás buscando?"/>
            </div>
        </transition>


    </div>
</template>

<script>

    export default {

        methods: {
            hideSearch() {
                this.$store.dispatch('nav/toggleSearch')
            }
        },

        computed: {

            isSearch() {
                return this.$store.getters['nav/toggleSearch']
            }

        }

    }

</script>
