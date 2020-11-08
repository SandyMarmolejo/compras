<template>
  <div class="detail">
    <h1>{{$route.params.nombre}}</h1>
    <ul>
      <!-- <li>{{atleta.nombre}}</li> -->
      <li>genero</li>
      <li>deporte</li>
    </ul>
  </div>
</template>

<script>
import atletasData from "../data/atletas";

export default {
  name: "DetailAtletas",
  created() {
    this.inicializar();
  },
   data() {
    return {
      atleta: [],
      atletas: [],
    };
  },
  methods: {
    inicializar() {
      this.atletas =  atletasData.atletas,

      this.atleta =  atletasData.atletas.filter((atleta) => {
        return atleta.nombre.toLowerCase() == $route.params.nombre.toLowerCase();
      })
    },
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>