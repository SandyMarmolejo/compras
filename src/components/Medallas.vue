<template>
  <div class="medallas">
    <h1>Medallas por Equipo</h1>
    <v-select v-model="paises" />
    <table>
      <thead>
        <th>
          <td>Equipo</td>
        </th>
        <th>
          <td>Medalla</td>
        </th>
      </thead>
      <tbody>
          <tr v-for="atleta in atletas" :key="atleta.nombre">
          <td>
            {{atleta.equipo}}
          </td>
          <td v-for="discip in atleta.disciplinas" :key="discip.disciplina">
            {{discip.medalla}}
          </td>
            <!-- <ul>
              <li v-for="discip in atleta.disciplinas" :key="discip.disciplina">
                  {{discip.temporada}}
              </li>
            </ul> -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import atletasData from "../data/atletas";

export default {
  name: "Medallas",
  props: {
    msg: String,
  },
  data() {
    return {
      atletas: atletasData.atletas,
       paises:  atletasData.atletas.map(item => item.equipo).filter((value, index, self) => self.indexOf(value) === index).sort(),
    };
  },
  methods: {},
};
</script>