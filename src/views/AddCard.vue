<template>
  <div id="add-card">
    <h1>ADD A NEW <span>BANK CARD</span></h1>
    <h2>NEW CARD</h2>
    <Form @viewChange="$emit('viewChange');" @toAddCard="recievingData" />
  </div>
</template>

<script>
import Form from '../components/Form.vue';

export default {
  name: 'AddCard',
  components: { Form
  },
  props: [''],
  data(){
    return{
      card: {
        cardNumber: '',
        cardholderName: '',
        validMonth: '',
        validYear: '',
        vendor: ''
      },
    }
  },
  methods: {
    recievingData(payload){
      this.card = payload
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
