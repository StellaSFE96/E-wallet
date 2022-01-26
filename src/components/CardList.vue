<template>
  <div id="card-list">
    <!-- <Card v-if="!savedCardsArray" :user="user" />
    <Card :user="user" v-for="user in savedCardsArray" :key="user" /> -->
    <Card :card="card" v-for="card in cards" :key="card.vendor"/>
  </div>
</template>

<script>
import Card from './Card.vue';
export default {
  name: 'CardList',
  components: { Card },
  data() {
    return {
    
    }
  },
  props: ['card', 'cards'],
}
</script>

<style>
#card-list {
  height: 337px;
  width: 380px;
}
</style>
