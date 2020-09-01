<template>
  <div
    class="w-2/5 flex flex-col justify-between min-h-45 mt-16 bg-gray-200 rounded-2xl p-10"
  >
    <div>
      <CartItem
        v-for="(item, index) in cartItems"
        :key="index"
        :item="item"
      ></CartItem>
    </div>
    <table class="table-fixed w-full text-2xl">
      <thead>
        <tr>
          <th class="w-1/2 px-4 py-2"></th>
          <th class="w-1/4 px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            class="border-t-2 font-bold text-2xl text-gray-700 bg-gray-200 px-4 py-2"
          >
            Shipping
          </td>
          <td
            class="border-t-2 font-bold text-xl text-gray-700 bg-gray-200 px-4 py-2 text-right"
          >
            $19
          </td>
        </tr>
        <tr class="bg-gray-100">
          <td
            class="border-t-2 font-bold text-2xl text-gray-700 bg-gray-200 px-4 py-2"
          >
            Total
          </td>
          <td
            class="border-t-2 font-bold text-xl text-gray-700 bg-gray-200 px-4 py-2 text-right"
          >
            ${{ total }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import CartItem from "@/components/cart/CartItem.vue";

export default {
  components: {
    CartItem
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.items
    }),
    ...mapGetters("cart", ["total"])
  }
};
</script>

<style></style>
