<template>
  <div class="deportes">
    <h1>Deportes por Temporada</h1>
    <input type="text" v-model="nuevaDisciplina">
    <button @click="agregarNuevaDisciplina">Agregar</button>
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
      nuevaDisciplina: ''
    };
  },
  methods:{
    agregarNuevaDisciplina () {
     this.atletas.disciplinas.push({
      disciplina: this.nuevaDisciplina, temporada:1, año: 2, ciudad: 3, medalla: 4
    })
    }
  }
}
</script>