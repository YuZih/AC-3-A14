<template>
  <!--   button -->
  <section class="sec__btn mx-4 mt-8">
    <button
      id="last-btn"
      v-show="currentStep > 1"
      @click.stop.prevent="toLastStep"
    >
      ← 上一步
    </button>
    <button id="next-btn" @click.stop.prevent="toNextStep">
      {{ currentStep === 3 ? "確認下單" : "下一步 →" }}
    </button>
  </section>
</template>

<script>
export default {
  props: {
    //從父層view(checkout)繼承step這個屬性
    step: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      //複製出元件自身屬性始得進行修改
      currentStep: this.step,
    };
  },
  methods: {
    toNextStep() {
      if (this.currentStep < 3) {
        this.currentStep += 1;
      }
      //元件發動事件以修改父層的資料(step)
      this.$emit("change-step", this.currentStep);
    },
    toLastStep() {
      if (this.currentStep > 1) {
        this.currentStep -= 1;
      }
      //元件發動事件以修改父層的資料(step)
      this.$emit("change-step", this.currentStep);
    },
  },
};
</script>
