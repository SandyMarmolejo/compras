<template>
  <div class="deportes">
    <h1>Deportes por Temporada</h1>
    <table>
      <thead>
        <th>
          <td>Verano</td>
        </th>
        <th>
          <td>Invierno</td>
        </th>
      </thead>
      <tbody>
        <tr v-for="atleta in atletas" :key="atleta.nombre">
          <td>
            {{atleta.disciplinas}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import atletasData from "../data/atletas";

export default {
  name: "Deportes",
  props: {
    msg: String,
  },
  data() {
    return {
      atletas: atletasData.atletas,
    };
  },
  methods:{
    
  }
}
</script>