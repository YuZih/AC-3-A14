<template>
  <main>
    <Stepper :step="step" />
    <Form :step="step" :delivFee="delivFee" @change-delivFee="changeDelivFee" />
    <Button :step="step" @change-step="changeStep" />
    <Cart :delivFee="delivFee"/>
  </main>
</template>

<script>
import Stepper from "../components/Stepper.vue";
import Form from "../components/Form.vue";
import Button from "../components/Button.vue";
import Cart from "../components/Cart.vue";

export default {
  data() {
    return {
      step: 1,
      delivFee: 0,
    };
  },
  components: {
    Stepper,
    Form,
    Button,
    Cart,
  },
  methods: {
    //點擊步驟按鈕後變更step
    changeStep(newStep) {
      this.step = newStep;
    },
    changeDelivFee(newFee) {
      this.delivFee = newFee;
      console.log("Fee changed:", this.delivFee);
    },
  },
};
</script>