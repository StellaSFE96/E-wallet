<template>
  <div class="cardList">
    <Card :card="card" v-for="card in cards" :key="card.vendor" />

  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  components: { Card },
  data(){return{
   
  }},
   props: ['card', 'cards']   
}
</script>

<style>

</style>