<template lang="en">
  <div class="center">
    <p>Название продукта {{product.name}}</p>
    <p>Цена продукта {{formattedPrice}}</p>
    <p v-if="product.available" >Available</p>
    <p v-else>Out of stock</p>
  </div>
</template>
<script>
export default {
  name: "ProductDetails",
  data() {
    return {
      product: { name: "product1", price: 10, available: false },
    };
  },
  computed: {
    formattedPrice() {
      return `$${this.product.price}`;
    },
  },
};
</script>

<style lang="scss">
.center {
  display: flex;
  flex-direction: column;
  font-size: 50px;
  align-items: center;
  margin-bottom: 100px;
}
</style>
