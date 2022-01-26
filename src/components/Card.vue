<template>
  <div class="card">
      <article class="cardTemplate">
          <div class="card-top">
              <div class="icons">
                 <img src="../assets/wifi.svg" alt="wifi icon">
                 <img src="../assets/chip.svg" alt="chip icon">
              </div>

              <div class="logo">
                 <img src="../assets/ninja.svg" alt="ninja logo">
              </div>
          </div>

          <div class="middle">
                <p v-if="card.cardNumber">{{ card.cardNumber}}</p>
                 <P v-else>XXXX XXXX XXXX XXXX</P>
          </div>

          <div class="card-bottom">
              <div class="b-left-corner">
                  <p>CARDHOLDER NAME</p>
                  <p v-if="card.cardholderName">{{ card.cardholderName}}</p>
                  <P v-else>---- -------</P>
              </div>

              <div class="b-right-corner">
                  <p>VALID THRU</p>
                  <div class="date">
                      <!-- Month -->
                      <p v-if="card.validMonth"> {{card.validMonth}}</p>
                      <p v-else>MM</p>
                      <P>/</P>
                      <!-- year -->
                     <p v-if="card.validYear"> {{card.validYear}}</p>
                      <p v-else>YY</p>
                  </div>
              </div>
          </div>
          
      </article>
  </div>
</template>

<script>
// import Form from '../components/Form.vue';
export default {
  name: 'Card',
  props: ['card'
  ],
  data(){
      return{
          wifiIcon: require('../assets/wifi.svg'),
          chipIcon: require('../assets/wifi.svg'),
          whiteWifiIcon: require('../assets/wifi.svg'),
          vendorLogo: require('../assets/wifi.svg'),
      }
  }
};
</script>

<style lang="scss" scoped>

.card {
  height: 240px;
  width: 380px;
  background-color: #d0d0d0;
  border-radius: 8px;
  box-shadow: 8px 9px 32px 1px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column; 
  margin: auto;
}

.card-top{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 5px;
}

.icons{
    display: flex;
    flex-direction: column;
}

.middle{
    font-size: 19px;
    letter-spacing: 4px;
    word-spacing: 11px;
}

.card-bottom{
    display: flex;
    justify-content: space-between;
   
}

.b-left-corner{
    p:first-of-type{
        font-size: 12px;
        margin-right: 40px;
        position: absolute;
    }
    p:last-of-type{
        font-size: 16px;
        letter-spacing: 2px;
        position: relative;
        top: 22px;
    }
    padding-left: 15px;
}

.b-right-corner{
    display: flex;
    flex-direction: column;
    font-size: 13px;

    p{
        margin-right: 14px;
        
    }

    div{
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        position: relative;
        bottom: 20px;
        font-size: 15px;
        margin-right: 15px;

        p{
            margin: 15px 3px;
        }

    }
}

</style>
