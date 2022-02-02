<template>
  <div class="home">
      <h1 class="title">E-WALLET</h1>
      <p class="active">ACTIVE CARD</p>

       <div class="active-card">
         <Card v-if="activeCard" :card="activeCard"/>
       </div>

       <div  class="active-card-list">
         <Card v-for="object in cards" :key="object.cardNumber" @show="activeCard = object" :card="object" />
       </div>

       <div>
         <button @click="$emit('viewChange')"> ADD A NEW CARD</button>
       </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components:  { Card },
  props: ['card', 'cards'],
  data(){
    return{
      activeCard: null,
    }},
    methods: {
    changeView(){
       this.$emit("sendToAddCard")
    }  
  }
}
</script>

<style>
  
.home{ 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
}

.title{
  font-family: 'Source Sans Pro', sans-serif;
}

.active{
  color: #706c6c;
  font-family: 'PT Mono', monospace;
}

.active-card-list{
  display: grid;
  grid-auto-rows: 4rem;
  margin-top: 2rem;
  margin-bottom: 13rem;
}
</style>