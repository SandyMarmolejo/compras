<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ListAtletas msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ListAtletas from '@/components/ListAtletas.vue'

export default {
  name: 'Home',
  components: {
    ListAtletas
  }
}
</script>
