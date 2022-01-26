<template>
  <div id="form">
    <Card :card='user'/>

    <form @submit.prevent="" >
        
        <label for="cardNumber">CARD NUMBER</label>
        <input type="number" 
        class="card-number"
        @keyup="collectUserData" 
        placeholder="XXXX XXXX XXXX XXXX"
        v-model.number="user.cardNumber">

        <label for="cardholderName">CARDHOLDER NAME</label>
        <input type="text"
        class="cardholder-name"
        @keyup="collectUserData"
        placeholder="Firstname Lastname" 
        v-model="user.cardholderName">
 
            <label for="validMonth">MONTH</label>
            <select 
                class="month"
                @mouseleave="collectUserData"
                v-model="user.validMonth"
                name="month" 
                id="months">
                    <option v-for="n in 12" :key="n" :value="(n > 9) ? n : '0' + n">
                        {{(n > 9) ? n : '0' + n}}
                    </option>
             </select>

            <label for="validYear">YEAR</label>
            <select 
                class="year"
                @mouseleave="collectUserData"
                v-model="user.validYear"
                name="year" 
                id="years">
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
            </select>

        <label for="vendorName">VENDOR</label>
        <select 
        class="vendor"
        @mouseleave="collectUserData" 
        v-model="user.vendor">
            <option value="bitcoin">Bitcoin Inc</option>
            <option value="blockchain">Blockchain Inc</option>
            <option value="evil">Evil Corp</option>
            <option value="ninja">Ninja Bank</option>
        </select>
        <button @click="sendUSerData">ADD CARD</button>
        <button class="add-btn" @click="$emit('viewChange')">ADD CARD</button>
      </form>
  </div>
</template>

<script>
import Card from '../components/Card.vue'
export default {
  name: 'Form',
  components: {Card},
  data() {
    return {
        cardNumber: '',
        name: '',
        validMonth: '',
        validYear: '',
        vendor: '',

        user: {
        cardNumber: '',
        name: '',
        validMonth: '',
        validYear: '',
        vendor: '',
      },
    }
  },
  methods: {
    submit() {
      this.$emit('viewChange');
    },
    collectUserData(){
        this.cardNumber = this.user.cardNumber
        this.name = this.user.name
        this.validMonth = this.user.validMonth
        this.validYear = this.user.validYear
        this.vendor = this.user.vendor
    },
    sendUSerData(){
        this.$emit('toAddCard', this.user)
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
  width: 185px;
  position: relative;
  top: 20px;
  right: 132px;
}

.year {
  height: 56px;
  width: 180px;
  position: relative;
  bottom: 53px;
  left: 120px;
}
.vendor {
  height: 56px;
  width: 375px;
  position: relative;
  bottom: 30px;
}
.add-btn {
  position: relative;
  bottom: 25px;
  right: 5px;
}

form{
    margin-top: 20px;
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
        right: 56px;
        bottom: 25px;
    }
    label:nth-of-type(4){
        position: relative;
        right: 262px;
        bottom: 5px;
    }
}
</style>
