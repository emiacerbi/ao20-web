<template>
  <div class="container">
    <br>
    <div class="text-center mb-12">
      <h2 class="section-title text-center mb-4 uppercase">Mercado AO</h2>

      <h3>Paquetes de Creditos AO20.</h3>

      <div v-if="a020pointsOnSale.length">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="flex flex-col items-center gap-y-4" v-for="points in a020pointsOnSale" :key="points.name" :id="points.name">

            <NuxtLink :to="`/mercadoao/ao20points/${points.name}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                <img :src="require(`~/assets/img/mao/${points.image}`)"/>
              </div>

              <ul>
                <li class="text-s">{{ points.name }}</li>
                <li class="text-green text-sm md:text-base lg:text-lg">Cantidad Creditos: {{ points.qty_points }} </li>
                <li class="points-list-item points-list-item-text">{{ formatPrice(points.price_in_usd, 'USD') }}</li>
                <li class="points-list-item points-list-item-text">{{ formatPrice(points.price_in_pesos, 'ARS') }} ARS</li>
              </ul>
            </NuxtLink>
          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">No hay Puntos Patreon en venta.</p>
      </section>

      <PagePadding />

      <h3>Tiers de Creditos AO20.</h3>
      <div>Estas son subscripciones que se pagan mensualmente, <a href="https://www.patreon.com/posts/guia-beneficios-63817246">VER BENEFICIOS</a> </div>

      <div v-if="a020pointsTiersOnSale.length">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="flex flex-col items-center gap-y-4" v-for="tier in a020pointsTiersOnSale" :key="tier.name" :id="tier.name">

            <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
              <img :src="require(`~/assets/img/mao/${tier.image}`)"/>
            </div>

            <ul>
              <li class="text-s">{{ tier.name }}</li>
            </ul>

            <ul>
              <li v-if="tier.mercadopago_payment_url" class="text-green text-sm md:text-base lg:text-lg">
                <a :href="tier.mercadopago_payment_url">Subscribirse con MercadoPago</a>
              </li>
              <li v-if="tier.patreon_payment_url" class="text-green text-sm md:text-base lg:text-lg">
                <a :href="tier.patreon_payment_url">Subscribirse con Patreon</a>
              </li>
            </ul>

          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">No hay Puntos Patreon en venta.</p>
      </section>


        <div v-if="FEATURE_FLAG_MAO_ITEMS != 0">
          <PagePadding />
          <div v-if="itemsOnSale.length">
          <h3>Items unicos.</h3>

            <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div class="flex flex-col items-center gap-y-4" v-for="item in itemsOnSale" :key="item.item_id" :id="item.item_id">

                <NuxtLink :to="`/mercadoao/item/${item.item_id}`">
                  <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-12 bg-gray-900">
                    <img :src="item.Data.canvasImage" width="64px" />
                  </div>

                  <ul>
                    <li class="text-s">{{ item.Data.NAME }}</li>
                    <li class="text-xs md:text-sm lg:text-base">{{ item.Data.NAME == item.Data.TEXTO ? "" : item.Data.TEXTO }}</li>
                    <li class="points-list-item points-list-item-text">{{ formatPrice(item.price_in_usd, 'USD') }}</li>
                    <li class="points-list-item points-list-item-text">{{ formatPrice(item.price_in_pesos, 'ARS') }} ARS</li>
                  </ul>
                </NuxtLink>
              </div>
            </div>
          </div>

          <section v-else class="text-center mt-24">
            <p class="text-2xl">No hay items en venta.</p>
          </section>

        </div>

      <PagePadding />

      <h3>Personajes en venta.</h3>
      <h4>Se actualiza cada 1 hs con la informacion mas reciente del mundo.</h4>
      <div v-if="usersOnSale.length">
        <span>Hay <strong>{{usersOnSale.length}}</strong> personajes listados.</span>

        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div class="flex flex-col items-center gap-y-4"
              v-for="user in usersOnSale" :key="user.name" :id="user.name">

            <NuxtLink :to="`/mercadoao/personaje/${user.name}`">
              <div class="flex items-center justify-center border-2 border-gr border-gr-primary p-1 bg-gray-900">
                <img :src="user.canvasImage" width="64px"/>
              </div>
              <ul>
                <h4 class="text-gr gr-gold text-lg md:text-xl lg:text-2xl">{{ user.name }}</h4>
                <li class="text-m gr-gold text-sm md:text-base lg:text-lg">Nivel: {{ user.level }}</li>
                <li class="points-list-item points-list-item-text">{{ formatPrice(user.price_in_usd, 'USD') }}</li>
                <li class="points-list-item points-list-item-text">{{ formatPrice(user.price_in_mao, 'ARS') }} ARS</li>
              </ul>
            </NuxtLink>
          </div>
        </div>
      </div>

      <section v-else class="text-center mt-24">
        <p class="text-2xl">Aún no hay personajes en venta.</p>
      </section>
    </div>
    <span>
      Leí y acepto
      <NuxtLink to="/reglamento" class="text-primary hover:underline"> el reglamento de juego al utilizar MAO</NuxtLink>
    </span>
  </div>
</template>

<script>
import { priceMixin } from '@/mixins/priceMixin.js';

export default {
  mixins: [priceMixin],

  async asyncData({ $axios }) {
    return {
      usersOnSale: await $axios.$post(`users/getAllUsersOnSaleInMao`),
      itemsOnSale: await $axios.$get(`market/getAllItemsOnSale`),
      a020pointsOnSale: await $axios.$get(`market/getAllAO20PointsOnSale`),
      a020pointsTiersOnSale: await $axios.$get(`market/getAllAO20PointsTiersOnSale`),
    };
  },

  data() {
    return {
      FEATURE_FLAG_MAO_ITEMS: process.env.FEATURE_FLAG_MAO_ITEMS
    }
  },
};
</script>

<style>
  .points-list-item {
    /* Your preferred styling here */
  }
  .points-list-item-text {
    color: green;
  }
  @media screen and (min-width: 768px) {
    .points-list-item-text {
      font-size: 1rem; /* or another value for base text size */
    }
  }
  @media screen and (min-width: 1024px) {
    .points-list-item-text {
      font-size: 1.125rem; /* or another value for large text size */
    }
  }

  /* Add some spacing between each item in the grid */
  .container .grid .gap-y-4 {
    margin-bottom: 24px;
  }

  /* Style the NuxtLink components */
  .container .grid .flex .NuxtLink {
    text-decoration: none;
    color: inherit;
  }

  /* Style the item images */
  .container .grid .flex .border-2 {
    width: 200px;
    height: 200px;
    overflow: hidden;
  }

  /* Style the item details */
  .container .grid .flex ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .container .grid .flex ul li {
    font-size: 18px;
    line-height: 1.5;
  }

  /* Style the price */
  .container .grid .flex ul li[style*="color: green"] {
    font-weight: bold;
  }

</style>
