<template>
  <div>
    <TheHeader/>
    <ThePopularProducts :products="$store.state.productsBestSale" title="Popular products " to="store"/>
    <TheMiddleImage/>
    <ThePopularProducts :products="$store.state.productsOnSale" title="Products on sale " to="sale"/>
    <TheFooter/>
  </div>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";
  import ThePopularProducts from "@/components/ThePopularProducts";
  import TheMiddleImage from "@/components/TheMiddleImage";
  export default {
    name: "TheMain",
    components: {TheMiddleImage, ThePopularProducts, TheFooter, TheHeader},
  }
</script>

<style scoped>

</style>
