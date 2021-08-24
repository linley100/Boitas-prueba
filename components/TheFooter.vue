<!--
  Pie de pagina
  Contiene:

    -El logo de Boitas.
    -Opciones varias.
    -Imagenes de los metodos de pago.
-->
<template>

    <footer>

        <div class="footer-A">

            <div class="footer_logo">
                <label class="logo">
                    <img src="~/assets/boitas-black.jpg" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </label>
            </div>

            <div class="footer-A-sub1">
                <ul class="footer-list">
                    <li class="footer-item"><nuxt-link to="/about">Mi cuenta</nuxt-link></li>
                    <li class="footer-item"><nuxt-link to="/services">Mis pedidos</nuxt-link></li>
                    <li class="footer-item"><nuxt-link to="/contact">Quiero vender en Boitas.com</nuxt-link></li>
                    <li class="footer-item"><nuxt-link to="/services">Blog</nuxt-link></li>
                </ul> 
            </div>

            <div class="footer-A-sub2">
                <ul class="footer-list">
                    <li class="footer-item"><nuxt-link to="/about">Aviso de Privacidad</nuxt-link></li>
                    <li class="footer-item"><nuxt-link to="/services">Términos y Condiciones</nuxt-link></li>
                    <li class="footer-item"><nuxt-link to="/contact">Cambios y Devoluciones</nuxt-link></li>
                    <li class="footer-item"><nuxt-link to="/services">Preguntas Frecuentes</nuxt-link></li>
                </ul>
            </div>

            <div class="footer-A-sub3">
                <button class="button-red"><img src="~/assets/facebook.png" alt="icon" height="100%" width="100%"></button>
                <button class="button-red"><img src="~/assets/instagram.png" alt="icon" height="100%" width="100%"></button>
                <button class="button-red"><img src="~/assets/twiter.png" alt="icon" height="100%" width="100%"></button>
                <button class="button-red"><img src="~/assets/clics.png" alt="icon" height="100%" width="100%"></button>
            </div>

        </div>

        <div class="footer-B">

            <div class="pagos">

                <div class="pago">
                    <img src="~/assets/pagos/visa.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/mastercard.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/americanExpress.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/paypal.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/mercadoPago.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/atrato.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/oxxo.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/rappi.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>
                <div class="pago">
                    <img src="~/assets/pagos/spe.png" alt="icon" height="100%" width="100%" style="opacity: 0.9">
                </div>

            </div>

        </div>

        <div class="footer-C">
            <p>Plataforma de Oportunidades SAPI de CV 2021. Todos los derechos reservados.</p>
        </div>
        
    </footer>

</template>
