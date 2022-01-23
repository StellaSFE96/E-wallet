<template>
  <div class="card">
      <article class="cardTemplate">
          <div class="card-top">
              <div class="left-corner">
                 <img src="../assets/wifi.svg" alt="wifi icon">
                 <img src="../assets/chip.svg" alt="chip icon">
              </div>

              <div class="right-corner">
                 <img src="../assets/bitcoin.svg" alt="bitcoin logo">
              </div>
          </div>

          <div class="middle">
                 <!-- <p>CARD NUMBER</p> -->
                 <P>XXXX XXXX XXXX XXXX</P>
          </div>

          <div class="card-bottom">
              <div class="b-left-corner">
                  <p>CARDHOLDER NAME</p>
                  <P>JANE JOHNSSON</P>
              </div>

              <div class="b-right-corner">
                  <p>VALID THRU</p>
                  <div class="date">
                      <!-- Month -->
                      <!-- <p>----</p> -->
                      <p>MM</p>
                      <P>/</P>
                      <!-- year -->
                      <!-- <p>----</p> -->
                      <p>YY</p>
                  </div>
              </div>
          </div>
          <Form />
      </article>
  </div>
</template>

<script>
import Form from '../components/Form.vue';
export default {
  name: 'Card',
  components: {Form},
  props: ['sendFormDataToCard'],
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

.left-corner{
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
        margin-bottom: 5px;
        margin-right: 27px;
    }
    p:last-of-type{
        font-size: 16px;
        margin-bottom: 50px;
        letter-spacing: 2px;
        position: relative;
        bottom: 5px;
    }
    padding-left: 15px;
}

.b-right-corner{
    display: flex;
    flex-direction: column;
    font-size: 13px;

    p{
        margin-right: 15px;
        
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
            margin: 15px 2px;
        }

    }
}

</style>
