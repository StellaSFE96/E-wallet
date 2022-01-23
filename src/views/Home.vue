<template>
  <div class="home">
      <h1 class="title">E-WALLET</h1>
       <p class="active">ACTIVE CARD</p>

       <div class="active-card">
         <!-- active card comp -->
       </div>

       <div class="card-list">
         <button @click="$emit('viewChange')"> ADD A NEW CARD</button>
       </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{
      currentView: 'AddCard'
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

.active{
  color: #383838;
  font-family: 'PT Mono', monospace;
}
</style>