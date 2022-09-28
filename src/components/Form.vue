<template>
  <!--   form -->
  <section class="sec__form mx-4">
    <form action="#" class="sec__form__wrapper">
      <!-- form part1 -->
      <div v-show="step === 1" class="sec__form__wrapper__part">
        <div class="sec__form__wrapper__part__title mt-6 big-title">
          寄送地址
        </div>
        <div class="form-row">
          <div class="field-container">
            <div class="field gender-field">
              <label for="gender">稱謂</label>
              <div class="select-wrapper">
                <select name="select-gender" id="gender">
                  <option value="">先生</option>
                  <option value="">女士</option>
                </select>
              </div>
            </div>
            <div class="field name-field">
              <label for="name">姓名</label>
              <input type="text" id="name" placeholder="請輸入姓名" />
            </div>
          </div>
        </div>

        <div class="form-row mobile-one-field">
          <div class="field phone-field">
            <label for="phone">電話</label>
            <input type="tel" id="phone" placeholder="請輸入行動電話" />
          </div>
          <div class="field email-field mt-4">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="請輸入電子郵件" />
          </div>
        </div>

        <div class="form-row mobile-one-field">
          <div class="field county-field">
            <label for="county">縣市</label>
            <div class="select-wrapper">
              <select name="select-county" id="county" required>
                <option value="" selected disabled hidden>請選擇縣市</option>
                /* 用disabled使option文字變灰色 */
                <option value="">請選擇縣市</option>
                <option value="">臺北市</option>
                <option value="">新北市</option>
                <option value="">桃園市</option>
                <option value="">新竹縣</option>
                <option value="">新竹市</option>
                <option value="">苗栗縣</option>
                <option value="">南投縣</option>
                <option value="">臺中市</option>
                <option value="">彰化縣</option>
                <option value="">雲林縣</option>
                <option value="">嘉義縣</option>
                <option value="">嘉義市</option>
                <option value="">臺南市</option>
                <option value="">高雄市</option>
                <option value="">屏東縣</option>
                <option value="">臺東縣</option>
                <option value="">花蓮縣</option>
                <option value="">宜蘭縣</option>
                <option value="">基隆市</option>
                <option value="">澎湖縣</option>
                <option value="">金門縣</option>
                <option value="">連江縣</option>
              </select>
            </div>
          </div>
          <div class="field address-field mt-4">
            <label for="address">地址</label>
            <input type="text" id="address" placeholder="請輸入地址" required />
          </div>
        </div>
      </div>

      <!-- form part2 -->
      <div
        v-show="step === 2"
        class="sec__form__wrapper__part deliv-method-part"
      >
        <div class="sec__form__wrapper__part__title mt-6 big-title">
          運送方式
        </div>
        <div class="form-row">
          <label for="radio-btn-1" class="deliv-method-container">
            <div class="radio-btn-container">
              <input
                @change="handleFee"
                @click="feeNotRequired"
                type="radio"
                name="radio-btn"
                id="radio-btn-1"
                checked
              />
            </div>
            <div class="method-detail-container">
              <div class="method-name">標準運送</div>
              <div>約 3~7 個工作天</div>
            </div>
            <span>免費</span>
          </label>
        </div>
        <div class="form-row">
          <label for="radio-btn-2" class="deliv-method-container">
            <div class="radio-btn-container">
              <input
                @change="handleFee"
                @click="feeRequired"
                type="radio"
                name="radio-btn"
                id="radio-btn-2"
              />
            </div>
            <div class="method-detail-container">
              <div class="method-name" style="font-weight: 700">DHL 貨運</div>
              <div>48 小時內送達</div>
            </div>
            <span>$500</span>
          </label>
        </div>
      </div>

      <!-- form part3 -->
      <div v-show="step === 3" class="sec__form__wrapper__part">
        <div class="sec__form__wrapper__part__title mt-6 big-title">
          付款資訊
        </div>

        <div class="form-row">
          <div class="field card-name-field">
            <label for="card-name">持卡人姓名</label>
            <input type="text" id="card-name" placeholder="John Doe" />
          </div>
        </div>

        <div class="form-row">
          <div class="field card-number-field">
            <label for="card-number">卡號</label>
            <input
              type="text"
              id="card-number"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>

        <div class="form-row">
          <div class="field-container">
            <div class="field valid-date-field">
              <label for="gender">有效期限</label>
              <input type="text" id="valid-date" placeholder="MM/YY" />
            </div>
            <div class="field card-cvc-field">
              <label for="card-cvc">CVC / CCV</label>
              <input type="text" id="card-cvc" placeholder="123" />
            </div>
          </div>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  props: {
    //從父層view(checkout)繼承step和delivFee這兩個屬性
    step: {
      type: Number,
      require: true,
    },
    delivFee: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      //複製出元件自身屬性始得進行修改
      currentDelivFee: this.delivFee,
    };
  },
  methods: {
    //Form目前只處理運費變動的部分
    feeRequired() {
      this.currentDelivFee = 500;
    },
    feeNotRequired() {
      this.currentDelivFee = 0;
    },
    handleFee() {
      this.$emit("change-delivFee", this.currentDelivFee);
    },
  },
};
</script>