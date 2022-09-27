<template>
  <!--   cart -->
  <section class="sec__cart mx-4 mt-8">
    <div class="sec__cart__container">
      <div class="sec__cart__container__wrapper">
        <div class="sec__cart__container__wrapper__header">購物籃</div>
        <div class="sec__cart__container__wrapper__product">
          <div class="product-image-container">
            <img
              src="https://i.postimg.cc/MTDHkLvD/Block-2x-1.png"
              alt="product-image"
            />
          </div>
          <div class="product-description-container">
            <div class="product-name">破壞補丁修身牛仔褲</div>
            <div class="product-btn-container d-flex align-items-center">
              <button
                @click="product1_minus"
                class="product-btn"
                id="minus-btn"
              >
                -
              </button>
              <div class="product-quantity">{{ product1_quantity }}</div>
              <button @click="product1_plus" class="product-btn" id="plus-btn">
                +
              </button>
            </div>
            <div class="product-price" data-value="3999">
              {{ product1_total | priceFiltering }}
            </div>
          </div>
        </div>
        <div class="sec__cart__container__wrapper__product">
          <div class="product-image-container">
            <img src="https://i.postimg.cc/k4fvrgr4/Block-2x.png" />
          </div>
          <div class="product-description-container">
            <div class="product-name">刷色直筒牛仔褲</div>
            <div class="product-btn-container d-flex align-items-center">
              <button
                @click="product2_minus"
                class="product-btn"
                id="minus-btn"
              >
                -
              </button>
              <div class="product-quantity">{{ product2_quantity }}</div>
              <button @click="product2_plus" class="product-btn" id="plus-btn">
                +
              </button>
            </div>
            <div class="product-price" data-value="1299">
              {{ product2_total | priceFiltering }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="sec__cart__container__deliv-fee d-flex justify-content-between"
      >
        <div class="cart-fee-title">運費</div>
        <div class="cart-fee-total" id="deliv-fee-total">
          {{ delivFee ? "$500" : "免費" }}
        </div>
      </div>
      <div
        class="sec__cart__container__subtotal d-flex justify-content-between"
      >
        <div class="cart-fee-title">小計</div>
        <div class="cart-fee-total" id="subtotal">
          {{ subtotal | priceFiltering }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    delivFee: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      product1_quantity: 1,
      product1_total: 3999,
      product2_quantity: 1,
      product2_total: 1299,
      subtotal: 5298,
    };
  },
  methods: {
    product1_minus() {
      this.product1_quantity -= 1;
      this.product1_total = this.product1_quantity * 3999;
      this.changeSubtotal();
    },
    product1_plus() {
      this.product1_quantity += 1;
      this.product1_total = this.product1_quantity * 3999;
      this.changeSubtotal();
    },
    product2_minus() {
      this.product2_quantity -= 1;
      this.product2_total = this.product2_quantity * 1299;
      this.changeSubtotal();
    },
    product2_plus() {
      this.product2_quantity += 1;
      this.product2_total = this.product1_quantity * 3999;
      this.changeSubtotal();
    },
    changeSubtotal() {
      this.subtotal = this.product1_total + this.product2_total + this.delivFee;
    },
  },
  filters: {
    priceFiltering(price) {
      return "$" + price.toLocaleString();
    },
  },
};
</script>