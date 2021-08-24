<!--
  Cabecera de la pagina
  Contiene:

    -El logo de Boitas.
    -Un buscador o un boton para llamar al buscador, depende del tamaño de la ventana.
    -Un boton para llamar al menu desplegable o do botones, una para iniciar seccion
     y otro para registrarse, depende del tamaño de la ventana.
-->

<template>
    <header>

        <div class="brand-name">
            <label class="menu__logo">
                <img src="~/assets/boitas.png" alt="icon" width="100%" height="100%" style="opacity: 0.9">
            </label>

            <input type="text" v-model="buscar" class="search-box-h" placeholder="¿Qué estás buscando?"/>
        </div>

        <div class="toggles">

            <div class="box-button-search">
                <button class="button-search" @click="$store.dispatch('nav/toggleSearch')"><img src="~/assets/lupa.png" alt="icon" height="100%" width="100%"></button>
            </div>

            <div class="drawer-toggle" role="button" @click="$store.dispatch('nav/toggleSidebar')">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>

        </div>

        <div class="app-links">
            <app-links/>
        </div>

        <div class="app-links-2">
            <button class="ini">Iniciar sessión</button>
            <button class="reg">Registrarme</button>
        </div>

    </header>
</template>

<script>

export default {

}
</script>
