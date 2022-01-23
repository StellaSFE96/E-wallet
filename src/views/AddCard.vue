<template>
  <div id="add-card">
    <h1>ADD A NEW <span>BANK CARD</span></h1>
    <h2>NEW CARD</h2>
    <Card @viewChange="$emit('viewChange')" />
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'AddCard',
  components: { Card
  },
};
</script>

<style lang="scss">
#add-card {
  margin: auto;
  width: 400px;
  
  h2{
    font-family: 'Source Sans Pro', sans-serif;
    color: rgb(124, 121, 121);
    font-size: 15px;
  }
}

span{
  display: inline-block;
}
</style>
