<template>
  <div id="app">
    <Home v-if="currentView == 'home'" @viewChange="toggleView" />
    <AddCard v-else @viewChange="toggleView" />

    <nav>
      <button class="addNew" @click="currentView = 'AddCard'">ADD A NEW CARD</button>
      <button class="addCard" @click="currentView = 'home'">HOME</button>
    </nav> 
  </div>
</template>

<script>
import Home from './views/Home.vue'
import AddCard from './views/AddCard.vue'

export default {
 name: 'app',

 components: { 
   Home, AddCard
   },

 data(){
   return{
     currentView : 'home',
    //  isHidden: false
   }
 },

 methods: {
   toggleView() {
      if (this.currentView == 'home') {
         this.currentView = 'addCard';
      } else {
        this.currentView = 'home';
    }
   }
  }
};
</script>

<style scoped>
#app{
  background-color: rgb(216, 235, 253);
  max-width: 414px;
  max-height: 690px;
  margin: auto;
  display: flex;
  flex-direction: column;

}

button{
  width: 400px;
  height: 50px;
  margin: 5px;
  border: none;
  border-radius: 8px;
  font-family: 'PT Mono', monospace;
  background-color: rgb(244, 253, 253);
}

h1{
  font-family: 'Source Sans Pro', sans-serif;
}
input, button, h2, h3 {
  font-family: 'PT Mono', monospace;
}

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');
</style>

