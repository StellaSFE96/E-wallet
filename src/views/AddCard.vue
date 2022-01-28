<template>
  <div id="add-card">
    <h1>ADD A NEW <span>BANK CARD</span></h1>
    <h2>NEW CARD</h2>
    <Form @viewChange="$emit('viewChange');" @toAddCard="formPayload" />
  </div>
   <!-- change now-->
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'AddCard',
  components: { Form },
  data(){
    return{
      card: [],
    }
  },
  methods: {
    formPayload(dataPayload){
          this.card = dataPayload
          this.$emit('toApp', this.card)
    }
  },
};
</script>

<style lang="scss">
#add-card {
  margin: auto;
  width: 400px;

    h1{
      position: relative;
      top: 10px;
    }
    h2{
      font-family: 'Source Sans Pro', sans-serif;
      color: rgb(124, 121, 121);
      font-size: 15px;
    }
    span{
    display: block;
  }
}

</style>
