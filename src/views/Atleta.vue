<template>
<div>
    <!-- Componente hijo -->
    <div class="py-5 bg-success">
        <p>Componente hijo</p>
        <p>{{ numero }}</p>
    </div>
    <!-- <DetailAtletas /> -->
</div>
</template>

<script>
// import DetailAtletas from '../components/DetailAtletas.vue'

export default {
    name: 'Atleta',
    //Con los props recibimos alguna informacion
    props: {
        numero: String,
    },
    //  components: {
    //      DetailAtletas
    //  }
}
</script>
