<template>
  <div class="temporada">
    <Deportes msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Deportes from '../components/Deportes.vue'

export default {
  name: 'Temporada',
  components: {
    Deportes
  }
}
</script>