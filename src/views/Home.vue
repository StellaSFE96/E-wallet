<template>
  <div class="home">
      <h1 class="title">E-WALLET</h1>
      <p class="active">ACTIVE CARD</p>

       <div class="card-list">
         <CardList />
       </div>

       <div>
         <button @click="$emit('viewChange')"> ADD A NEW CARD</button>
       </div>
  </div>
</template>

<script>
import CardList from '../components/CardList.vue'
export default {
  name: 'Home',
  components:  { CardList
  },
  data(){
    return{


      
      // currentView: 'AddCard'
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

h1{
  font-family: 'Source Sans Pro', sans-serif;
}

.home p{
  color: #383838;
  font-family: 'PT Mono', monospace;
}
</style>