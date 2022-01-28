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
    card: " ",
    cards: [
      {
        vendorName: "blockchain",
        cardNumber: "8282828282828282",
        cardholderName: "Peter Griffin",
        validMonth: "02",
        validYear: "22",
      },
      {
        vendorName: "evil",
        cardNumber: "0000000000000000",
        cardholderName: "Pickle Rick",
        validMonth: "04",
        validYear: "24",
      },
      {
        vendorName: "ninja",
        cardNumber: "2222222222222222",
        cardholderName: "Moon cake",
        validMonth: "06",
        validYear: "26",
      },

    ],
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
    addNewCardToList(){
      this.cards.push(this.card)
      localStorage.setItem("cards", JSON.stringify(this.cards))
    },
  }
};
</script>

<style >
#app{
  background-color: rgb(216, 235, 253);
  margin-top: 20px;
  text-align: center;
  width: 400px;
  height: 870px;
  margin-left: 50px;
  border-radius: 10px;
  
}
/* nav{
  display: flex;
  flex-direction: column;
  align-items: center;
} */

button{
  width: 380px;
  height: 50px;
  margin: 5px;
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

