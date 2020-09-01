<template>
  <div class="flex flex-row mb-8">
    <img :src="item.img" alt="article" class="w-5/12 mr-6 rounded-2xl" />
    <div class="flex flex-col justify-between w-full">
      <div>
        <h3 class="font-bold text-xl text-gray-800 mb-2">{{ item.name }}</h3>
        <div>
          <span class="font-bold text-xl text-orange-500 mr-3">{{
            item.sale
          }}</span>
          <span class="font-bold text-md text-gray-800 line-through">{{
            item.price
          }}</span>
        </div>
      </div>
      <div
        class="flex flex-row justify-between items-center border-gray-900 border-2 rounded-2xl p-3 w-8/12"
      >
        <button
          @click="decreaseItemQuantity(item)"
          class="bg-gray-300 rounded-lg flex flex-row p-1 justify-center items-center"
        >
          <i class="material-icons text-gray-600">remove</i>
        </button>
        <span class="font-bold text-2xl">{{ item.quantity }}</span>
        <button>
          <button
            @click="increaseItemQuantity(item)"
            class="bg-gray-300 rounded-lg flex flex-row p-1 justify-center items-center"
          >
            <i class="material-icons text-gray-600">add</i>
          </button>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    item: Object
  },
  methods: {
    ...mapActions("cart", ["increaseItemQuantity", "decreaseItemQuantity"])
  }
};
</script>

<style></style>
