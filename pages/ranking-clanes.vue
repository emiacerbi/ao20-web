<template>
  <div class="container">
    <br>
    <br>
    <div
      v-if="rankingGuilds.length"
      class="bg-gray-900 border-2 border-gr border-gr-primary"
    >
      <h2 class="section-title text-center mb-4 uppercase">Ranking Clanes</h2>
      <h6>Ordenados por cantidad de miembros</h6>
      <div class="overflow-x-auto">
        <table class="text-gray-400 table-auto">
          <thead>
            <tr>
              <th class="w-1/12">Nombre</th>
              <th class="w-1/12">Fundador</th>
              <th class="w-1/12">Fecha Creacion</th>
              <th class="w-1/12">Alineacion</th>
              <th class="w-1/12">Ultimas Elecciones</th>
              <th class="w-2/12">Descripcion</th>
              <th class="w-2/12">Novedades</th>
              <th class="w-1/12">Lider</th>
              <th class="w-1/12">Nivel</th>
              <th class="w-1/12">Miembros</th>
              <th class="w-1/12">Cantidad Miembros</th>
              <th class="w-1/12">Cantidad Solicitudes para Ingreso</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="guild in rankingGuilds" :key="guild.item_id">
              <td class="w-1/12">{{ guild.guild_name }}</td>
              <td class="w-1/12">{{ guild.founder_name }}</td>
              <td class="w-2/12">{{ $dayjs(guild.creation_date).format('DD [de] MMMM [de] YYYY [a las] HH:mm') }}</td>
              <td class="w-1/12">{{ guild.alignment }}</td>
              <td class="w-2/12">{{ $dayjs(guild.last_elections).format('DD [de] MMMM [de] YYYY [a las] HH:mm') }}</td>
              <td class="w-2/12">{{ guild.description }}</td>
              <td class="w-2/12">{{ guild.news }}</td>
              <td class="w-1/12">{{ guild.leader_name }}</td>
              <td class="w-1/12">{{ guild.level }}</td>
              <td class="w-1/12">{{ guild.MEMBERS }}</td> <!-- This property doesn't exist in your data structure; do you need it? -->
              <td class="w-1/12">{{ guild.QTY_MEMBERS }}</td>
              <td class="w-1/12">{{ guild.QTY_SOLICITUDES_INGRESO }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <section v-else class="text-center mt-24">
      <p class="text-2xl">Cargando Ranking Clanes.</p>
      <p class="text-l">Por favor se paciente, esta pagina puede tardar varios minutos en cargar...</p>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      rankingGuilds: [],
    };
  },
  async fetch() {
    this.rankingGuilds = await this.$axios.$get("/guilds/getAll");
  },
  head() {
    return {
      title: "Ranking - Clanes",
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
