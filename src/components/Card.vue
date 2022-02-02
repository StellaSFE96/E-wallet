<template>
  <div class="card">
      <article class="cardTemplate" :class="card.vendor" 
      :style="{background: templateBackground, color: templateTextColor}"
      @click="$emit('show')">
          <div class="card-top">
              <div class="icons">
                 <img v-if="card.vendor === 'bitcoin'" src="../assets/wifi.svg" alt="wifi icon">
                 <img v-else src="../assets/wifi_white.svg" alt="wifi icon">
                 <img src="../assets/chip.svg" alt="chip icon">
              </div>

              <div class="logo">
                 <img v-if="card.vendor" :src="require(`../assets/${card.vendor}.svg`)" alt="vendor">
              </div>
          </div>

          <div class="middle">
                <p v-if="numberTemplate">{{ numberTemplate}}</p>
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
export default {
  name: 'Card',
  props: ['card'],
  data(){
      return{
    }
  },
  computed: {

        templateTextColor(){
        if(this.card.vendor === "bitcoin"){
            return "black";
        }
        else {
            return "white";
        }
    },

      templateBackground() {
        if(this.card.vendor === "bitcoin"){
            return "#FFAE34";
        }
        else if(this.card.vendor === "evil"){
            return "#F33355";
        }
        else if(this.card.vendor === "ninja"){
            return "#333333";
        }
        else if(this.card.vendor === "blockchain"){
            return "#8B58F9";
        }
        else {
            return "#d0d0d0";
        }
    },

    numberTemplate(){
        let space= ''
        for(let i=0; i < this.card.cardNumber.length; i++){
                if(i % 4 == 0){
                    space +=" ";
                }
                space +=this.card.cardNumber[i]
                if(space.length>19){
                    return space
                }
            }
        return space 
    },
  }
}
</script>

<style lang="scss" scoped>

.cardTemplate {
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

    img:last-of-type{
        margin-left: 1px;
    }
}

.middle{
    font-size: 19px;
    letter-spacing: 4px;
    word-spacing: 11px;
}

.card-bottom{
    display: flex;
    justify-content: space-between;
    align-content: flex-start;

    p{
        margin-right: 20px;
        margin-bottom: -14px;
    }
}

.b-left-corner{
    p:first-of-type{
        font-size: 12px;
        margin-right: 40px;
    }
    p:last-of-type{
        font-size: 16px;
        letter-spacing: 2px;
    }
    padding-left: 15px;
}

.b-right-corner{
    display: flex;
    flex-direction: column;
    font-size: 13px;

    p{
        margin-right: 14px;
        align-self: baseline;
    }

    div{
        display: flex;
        justify-content: flex-end;
        flex-direction: row;
        font-size: 15px;
        margin-right: 15px;
    }
}

</style>
