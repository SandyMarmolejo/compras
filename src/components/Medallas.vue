<template>
<div class="medallas">
    <!-- Añadiendo bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <!-- Componente padre -->
    <div class="p-5 bg-dark text-white">
        <p>Componente padre</p>
        <Atleta numero="5" />
    </div>

    <hr>
    <h1>Medallas por Equipo</h1>
    <hr>
    <h2>{{mensaje}}</h2>
    <h2>texto invertido: {{invertido}}</h2>
    <input type="text" v-model="mensaje">
    <hr>
    <h3>{{ saludo }}</h3>
    <button @click="saludo = 'Otra vez te damos la bienvenida'">Cambiar</button>
    <hr>
    <button class="btn btn-primary" @click="contador++">+</button>
    <button class="btn btn-danger" @click="contador--">-</button>
    <h3>{{contador}}</h3>
    <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{'width' : contador+'%'}" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" :class="color">{{contador}}%</div>
    </div>
    <hr>
    <!-- <v-select v-model="paises" /> -->
    <table>
        <thead>
            <th>
            <td>Atleta</td>
            </th>
            <th>
            <td>Equipo</td>
            </th>
            <th>
            <td>Medalla</td>
            </th>
            <th>
            <td>Cantidad de medallas</td>
            </th>
        </thead>
        <tbody>
            <tr v-for="atleta in atletas" :key="atleta.nombre">
                <td>
                    {{atleta.nombre}}
                </td>
                <td>
                    {{atleta.equipo}}
                </td>
                <td v-for="discip in atleta.disciplinas" :key="discip.disciplina">
                    <ul>
                        <li>
                            {{discip.medalla}}
                        </li>
                    </ul>
                </td>
                <td v-for="dip in atleta.disciplinas" :key="dip.disciplina">
                    {{sumarMedallas}}
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
import Atleta from '../views/Atleta.vue'
export default {
    name: "Medallas",
    components: {
        Atleta
    },
    props: {
        msg: String,
    },
    data() {
        return {
            atletas: atletasData.atletas,
            mensaje: "Hola soy sandy",
            contador: 0,
            saludo: "Bienvenido",
            // paises: atletasData.atletas
            //   .map((item) => item.equipo)
            //   .filter((value, index, self) => self.indexOf(value) === index)
            //   .sort(),
        };
    },
    methods: {},
    computed: {
        invertido() {
            return this.mensaje.split('').reverse().join('');
        },
        color() {
            return {
                'bg-success': this.contador <= 10,
                'bg-warning': this.contador > 10 && this.contador < 20,
                'bg-danger': this.contador >= 20
            }
        },
        sumarMedallas() {
            let total = 0
            for (let atleta of this.atletas) {
                total = (total + parseInt(atleta.medalla));
            }
            return total;
        }
    }
};
</script>
