<template>
  <div id="form">
    <Card :card='user'/>

    <form @submit.prevent="transportData">
        
        <label for="cardNumber">CARD NUMBER</label>
        <input required
        type="text"
        class="card-number"
        maxlength="19"
        placeholder="XXXX XXXX XXXX XXXX"
        onkeypress="return /[0-9, ' ']/i.test(event.key)"
        v-model="user.cardNumber">

        <label for="cardholderName">CARDHOLDER NAME</label>
        <input required type="text"
        class="cardholder-name"
        placeholder="Firstname Lastname"
        onkeypress="return /[A-Z, ' ']/i.test(event.key)"
        v-model="user.cardholderName">
 
        <label for="validMonth">MONTH</label>
            <select 
                class="month"
                name="month" 
                id="month"
                v-model="user.validMonth">
                 <option value="" disabled selected>Select</option>
                    <option v-for="month in months" :key="month" :value="month">
                        {{month}}
                    </option>
             </select>

        <label for="validYear">YEAR</label>
            <select 
                class="year"
                name="year" 
                id="year"
                v-model="user.validYear">
                    <option value="" disabled selected>Select</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
            </select>

        <label for="vendor">VENDOR</label>
        <select class="vendor" name="vendor" v-model="user.vendor">
            <option value="" disabled selected>Select</option>
            <option value="bitcoin"> Bitcoing Inc</option>
            <option value="evil"> Evil Corp</option>
            <option value="ninja"> Ninja Bank</option>
            <option value="blockchain"> Blockchain Inc</option>
        </select>
        <button class="add-btn" @click="transportData">ADD CARD</button>
      </form>
  </div>
   <!-- change -->
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Form',
  components: {Card},
  data() {
    return {
        user: {
        cardNumber: '',
        cardholderName: '',
        validMonth: '',
        validYear: '',
        vendor: '',
      },
      months:['01','02','03','04','05','06','07','08','09','10','11','12'],
    };
  },
  methods: {
    transportData(){
        this.$emit('toAddCard', this.user)
        this.$emit('viewChange');
    }
  },
};
</script>

<style lang="scss" scoped>
label{
    color: rgb(77, 75, 75);
    font-size: 12px;
    font-family: 'PT Mono', monospace;
}
input {
  font-size: 18px;
  font-family: 'PT Mono', monospace;
  border-radius: 8px;
  padding-left: 5px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  border-color: rgb(123, 197, 219);
}
.card-number {
  height: 56px;
  width: 375px;
  margin-bottom: 5px;
}

.cardholder-name {
  height: 56px;
  width: 375px;
  margin-top: 10px;
}

.month {
  height: 56px;
  width: 190px;
  position: relative;
  top: 20px;
  right: 100px;
  border-radius: 8px;
  border-color: rgb(123, 197, 219);
   font-family: 'PT Mono', monospace;
}

.year {
  height: 56px;
  width: 190px;
  position: relative;
  bottom: 36px;
  left: 120px;
  border-radius: 8px;
  border-color: rgb(123, 197, 219);
   font-family: 'PT Mono', monospace;
}
.vendor {
  height: 56px;
  width: 380px;
  position: relative;
  bottom: 8px;
  border-radius: 8px;
  border-color: rgb(123, 197, 219);
   font-family: 'PT Mono', monospace;
}
.add-btn {
  position: relative;
  bottom: 25px;
  top: 20px;
}

form{
    margin-top: 20px;
}

select{
    color: rgb(77, 75, 75);
    font-size: 12px;
    font-family: 'PT Mono', monospace;
    letter-spacing: 1px;
}

#form{
    label:nth-of-type(1){
        position: relative;
        right: 148px;
        bottom: 3px;
    }
    label:nth-of-type(2){
        position: relative;
        right: 135px;
        top: 5px;
    }
    label:nth-of-type(3){
        position: relative;
        right: 63px;
        bottom: 20px;
    }
    label:nth-of-type(4){
        position: relative;
        right: 96px;
        bottom: 20px;
    }
    label:nth-of-type(5){
        position: relative;
        right: 262px;
        top: 10px;
      
    }
}
</style>
