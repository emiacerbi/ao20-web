<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="itemMagicos.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Items Magicos</h2>
      <div class="xl:col-span-10 text-xs overflow-x-auto">
        <table class="text-gray-400">
          <thead>
            <tr>
              <th>Id</th>
              <th></th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th><span title="Nivel Minimo" class="color-icon color-icon-md color-icon-minlvl"></span></th>
              <th>Efecto Magico</th>
              <th>Aumento</th>
              <th><span title="Valor en oro" class="color-icon color-icon-md color-icon-gold"></span></th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="itemMagico in itemMagicos" :key="itemMagico.item_id">
              <td class="text-right">{{ itemMagico.item_id }}</td>
              <td><img width="64px" :src="itemMagico.Data.canvasImage" /></td>
              <td class="text-right">{{ itemMagico.Data.NAME }}</td>
              <td class="text-right">{{ itemMagico.Data.TEXTO }}</td>
              <td class="text-right">{{ itemMagico.Data.MINELV }}</td>
              <td class="text-right">{{ itemMagico.Data.EFECTOMAGICO }}</td>
              <td class="text-right">{{ itemMagico.Data.CUANTOAUMENTO }}</td>
              <td class="text-right">{{ itemMagico.Data.VALOR }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Item Magicos.</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemMagicos: [],
    };
  },
  async fetch() {
    this.itemMagicos = await this.$axios.$get("/dats/getAllMagicItems");
  },
  head() {
    return {
      title: "Wiki - Items Magicos",
    };
  },
};
</script>

<style>

select:required:invalid {
  color: gray;
}

option[value=""][disabled] {
  display: none;
}


</style>
