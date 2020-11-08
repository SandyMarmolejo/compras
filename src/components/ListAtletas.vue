<template>
  <div class="hello">
    <button @click="ordenar">Ordenar por nombre</button>
    <button @click="ordenarPorDeporte">Ordenar por deporte</button>
    <button @click="ordenarPorPais">Ordenar por pais</button>
    <button @click="ordenarNombreDescendente">Ordenar nombre descendente</button>
    <button @click="ordenarDeporteDescendente">Ordenar deporte descendente</button>
    <p>
      <input type="text" placeholder="buscar por nombre" v-model="search"  />
    </p>
    <table>
      <thead>
        <th>
          <td>
            Nombre
          </td>
          <td>
            Deporte
          </td>
          <td>
            Equipo
          </td>
        </th>
      </thead>
      <tbody>
        <tr v-for="atleta in getAtletas" :key="atleta.nombre">
          <td>
            <a v-bind:href="'/atleta/'+ atleta.nombre"> {{atleta.nombre}} </a>
          </td>
          <td>
            {{atleta.deporte}}
          </td>
          <td>
            {{atleta.equipo}}
          </td>
        </tr>
      </tbody>
     </table>
  </div>
</template>

<script>
// import firebase from 'firebase';
// import { readUsers } from '../firebase/userService';
import atletasData from "../data/atletas";

export default {
  name: "ListAtletas",
  props: {
    msg: String,
  },
  data() {
    return {
      search: "",
      atletas: atletasData.atletas,
    };
  },
  methods: {
    ordenar() {
      this.atletas = this.atletas.sort((a, b) =>
        a.nombre > b.nombre ? 1 : -1
      );
    },
    ordenarPorDeporte() {
      this.atletas = this.atletas.sort((a, b) =>
        a.deporte > b.deporte ? 1 : -1
      );
    },
    ordenarPorPais() {
      this.atletas = this.atletas.sort((a, b) =>
        a.equipo > b.equipo ? 1 : -1
      );
    },
    ordenarNombreDescendente() {
      this.atletas = this.atletas.sort((a, b) =>
        a.nombre < b.nombre ? 1 : -1
      );
    },
    ordenarDeporteDescendente() {
      this.atletas = this.atletas.sort((a, b) =>
        a.deporte < b.deporte ? 1 : -1
      );
    },
  },
  computed: {
    getAtletas() {
      return this.atletas.filter((atleta) => {
        //return atleta.nombre.toLowerCase() === 'matteo bisiani';
        return atleta.nombre.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
