<template>
  <!--   stepper -->
  <section class="sec__stepper mx-4 mt-4">
    <div class="sec__stepper__title big-title">結帳</div>
    <div class="sec__stepper__wrapper mt-4 d-flex justify-content-between">
      <!-- 透過step屬性判定是否在class中添加checked -->
      <div
        class="sec__stepper__wrapper__step initial d-flex-center"
        :class="{ checked: step > 1 }"
      >
        <div class="sec__stepper__wrapper__step__circle d-flex-center"></div>
        <div class="sec__stepper__wrapper__step__label d-none">寄送地址</div>
      </div>

      <div class="sec__stepper__wrapper__line"></div>
      <!-- 透過step屬性判定是否在class中添加active或checked -->
      <div
        class="sec__stepper__wrapper__step d-flex-center"
        :class="{ active: step === 2, checked: step === 3 }"
      >
        <div class="sec__stepper__wrapper__step__circle d-flex-center"></div>
        <div class="sec__stepper__wrapper__step__label d-none">運送方式</div>
      </div>

      <div class="sec__stepper__wrapper__line"></div>
      <!-- 透過step屬性判定是否在class中添加active -->
      <div
        class="sec__stepper__wrapper__step d-flex-center"
        :class="{ active: step === 3 }"
      >
        <div class="sec__stepper__wrapper__step__circle d-flex-center"></div>
        <div class="sec__stepper__wrapper__step__label d-none">付款資訊</div>
      </div>
    </div>
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
};
</script>