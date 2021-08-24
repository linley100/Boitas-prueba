<!--
  Cuerpo de la pagina
  Contiene:

    -Las categorías de los producto.
    -Los productos.
-->
<template>
    
    <div>

        <div class="category">
            <div class="category-title">
                Categorías
            </div>
            <div>
                <ul class="category-list">
                    <li class="category-item"><nuxt-link to="">Estéticas, Salones de belleza y Barbería</nuxt-link> (1746)</li>
                    <li class="category-item"><nuxt-link to="">Ferreterías</nuxt-link> (650)</li>
                    <li class="category-item"><nuxt-link to="">Mueblerías, decoración, iluminación y hogar</nuxt-link> (516)</li>
                    <li class="category-item"><nuxt-link to="">Oportunidades en General por caja</nuxt-link> (12390)</li>
                    <li class="category-item"><nuxt-link to="">Papelerías/Mercerías</nuxt-link> (65)</li>
                    <li class="category-item"><nuxt-link to="">Restaurantes</nuxt-link> (33)</li>
                    <li class="category-item"><nuxt-link to="">Sexshop</nuxt-link> (143)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Abarrotes</nuxt-link> (201)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Cosméticos/Belleza</nuxt-link> (970)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Electrónicos</nuxt-link>  (1167)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda BTCA</nuxt-link> (13)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda ETDL</nuxt-link> (23)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda ETGN</nuxt-link> (18)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda FTMX</nuxt-link> (17)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda GTMJ</nuxt-link> (10)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda MASS</nuxt-link> (194)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda NTGGTP</nuxt-link> (1)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda NTNOV</nuxt-link> (43)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda TTCS</nuxt-link> (848)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Mascotas/Veterinaria</nuxt-link> (3)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Moda y Retail</nuxt-link> (437)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Regalo, chacharas y novedades</nuxt-link> (510)</li>
                </ul>
            </div>
        </div>

        <div class="product">

            <div class="product-position">
                <a class="product-item"><nuxt-link to="">Inicio</nuxt-link> » </a>
                <a class="product-item"><nuxt-link to="">Todos los productos</nuxt-link> » Tienda de Electrónicos</a>
            </div>
            
            <div class="product-title">
                Tienda de Electrónicos
            </div>
            
            <div class="product-items">
                Computadoras, bocinas, productos de gamers, cables, cámaras, aros de luz, accesorios de celular, celulares.
            </div>

            <div class="product-title-sub">
                Destacados
            </div>

            <div class="product-results">

                <div class="results">
                    Mostrando 1–20 de 1167 resultados
                </div>
                
                <div class="filtro">

                    <select class="entrada" style="cursor: pointer; width: 220px;">
                        <option v-for="Periodo in Periodos" v-bind:value="Periodo" :key="Periodo">
                        {{ Periodo }}
                        </option>
                    </select>

                </div>

            </div>

            <div class="elements">

                <div class="box-element" v-for="n in 20" :key="n">

                    <a href="">

                        <div class="element-photo">
                            <img src="~/assets/Audifonos_tws_a7s.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                        </div>

                        <div class="element-title">
                            AUDIFONOS TWS A7S
                        </div>

                        <div class="element-send">
                            Envio gratis en Mexico
                        </div>

                    </a>

                </div>

            </div>

            <div class="buttons">

                <button disabled class="button">1</button>

            </div>

        </div>

        <div class="category2">
            <div class="category-title">
                Categorías
            </div>
            <div>
                <ul class="category-list">
                    <li class="category-item"><nuxt-link to="">Estéticas, Salones de belleza y Barbería</nuxt-link> (1746)</li>
                    <li class="category-item"><nuxt-link to="">Ferreterías</nuxt-link> (650)</li>
                    <li class="category-item"><nuxt-link to="">Mueblerías, decoración, iluminación y hogar</nuxt-link> (516)</li>
                    <li class="category-item"><nuxt-link to="">Oportunidades en General por caja</nuxt-link> (12390)</li>
                    <li class="category-item"><nuxt-link to="">Papelerías/Mercerías</nuxt-link> (65)</li>
                    <li class="category-item"><nuxt-link to="">Restaurantes</nuxt-link> (33)</li>
                    <li class="category-item"><nuxt-link to="">Sexshop</nuxt-link> (143)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Abarrotes</nuxt-link> (201)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Cosméticos/Belleza</nuxt-link> (970)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Electrónicos</nuxt-link>  (1167)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda BTCA</nuxt-link> (13)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda ETDL</nuxt-link> (23)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda ETGN</nuxt-link> (18)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda FTMX</nuxt-link> (17)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda GTMJ</nuxt-link> (10)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda MASS</nuxt-link> (194)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda NTGGTP</nuxt-link> (1)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda NTNOV</nuxt-link> (43)</li>
                    <li class="category-item-sub"><nuxt-link to="">Tienda TTCS</nuxt-link> (848)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Mascotas/Veterinaria</nuxt-link> (3)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Moda y Retail</nuxt-link> (437)</li>
                    <li class="category-item"><nuxt-link to="">Tienda de Regalo, chacharas y novedades</nuxt-link> (510)</li>
                </ul>
            </div>
        </div>

    </div>
    
</template>

<script>
export default {
  
  data () {

    return {
        Periodos: [ 
          'Ordenar por popularidad', 
          'Ordenar por calificación media', 
          'Ordenar por los últimos', 
          'Ordenar por precio: bajo a alto', 
          'Ordenar por precio: alto a bajo' 
        ]
    }

  },
}
</script>