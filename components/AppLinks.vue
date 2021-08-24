<!--
  Elementos del menu desplegable
  Contiene:

    -Las opciones que ofrece el menu. 
-->
<template>

    <div>

        <label class="logo-nav">
            <img src="~/assets/boitas.png" alt="icon" width="100%" height="100%" style="opacity: 0.9">
        </label>

        <div class="items-nav" v-for="item in items" v-bind:value="item" :key="item">
            <a href="">
                <div class="item-nav">
                    <div class="item-nav-desc">
                        {{ item }}
                    </div>
                </div>
            </a>
        </div>

    </div>
    
</template>

<script>
export default {
  
  data () {

    return {
        items: [ 
          'Por Qué Boitas', 
          'Cómo Comprar', 
          'Financiamiento', 
          'Beneficios', 
          'Preguntas Frecuentes', 
          'Iniciar Sesión' 
        ]
    }

  },
}
</script>