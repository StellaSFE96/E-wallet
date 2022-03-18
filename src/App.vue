<template>
  <div id="app">
    <Home v-if="currentView == 'home'" 
    @viewChange="toggleView" :card="card" :cards="cards" />
    <AddCard v-else @viewChange="toggleView"
    @toApp="addCardPayload"
    />

  </div>
</template>

<script>
import Home from './views/Home.vue'
import AddCard from './views/AddCard.vue'

export default {
 name: 'App',
 components: { Home, AddCard },

 data(){
   return{
    currentView : 'home',
    card: [],
    cards: [
      {
        vendor: "ninja",
        cardNumber: "8282828282828282",
        cardholderName: "Peter Griffin",
        validMonth: "02",
        validYear: "22",
      },
      {
        vendor: "blockchain",
        cardNumber: "0000000000000000",
        cardholderName: "Pickle Rick",
        validMonth: "04",
        validYear: "24",
      },
      {
        vendor: "evil",
        cardNumber: "6666666666666666",
        cardholderName: "Lucifer Morningstar",
        validMonth: "06",
        validYear: "26",
      },
      {
        vendor: "bitcoin",
        cardNumber: "2222222222222222",
        cardholderName: "Moon cake",
        validMonth: "06",
        validYear: "26",
      },
    ],
   }
 },
 watch: {
   cards(newCards){
     localStorage.cards = JSON.stringify(newCards);
   }
 },

 methods: {
   toggleView() {
      if (this.currentView == 'home') {
         this.currentView = 'addCard';
      } else {
        this.currentView = 'home';
     }
   },
   addCardPayload(dataPayload){
      this.card = dataPayload
      this.cards.push(dataPayload)
      this.currentView = "Home"
    },
  },

  mounted(){
    if (localStorage.cards){
      this.cards = JSON.parse(localStorage.cards);
    }
  },
};
</script>

<style >
#app{
  background-color: rgb(216, 235, 253);
  margin-top: 20px;
  text-align: center;
  width: 400px;
  margin: auto;
  border-radius: 10px;
}

button{
  width: 380px;
  height: 50px;
  margin-bottom: 20px;
  border: none;
  border-radius: 8px;
  font-family: 'PT Mono', monospace;
  background-color: rgb(234, 255, 255);
}

h1{
  font-family: 'Source Sans Pro', sans-serif;
}

input, button, h2, h3, p {
  font-family: 'PT Mono', monospace;
}

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Mono&display=swap');

</style>

