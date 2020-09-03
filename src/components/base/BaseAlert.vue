<template>
  <div
    :class="[
      hasErrors
        ? 'border-red-500 bg-red-100 text-red-900'
        : ' border-teal-500  bg-teal-100 text-teal-900'
    ]"
    class="fixed top-0 left-0 right-0 mx-auto my-10 w-1/3 border-t-4 rounded-lg  px-4 py-3 shadow-md"
    role="alert"
  >
    <div class="flex">
      <div class="py-1">
        <svg
          :class="hasErrors ? 'text-red-500' : 'text-teal-500'"
          class="fill-current h-6 w-6  mr-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"
          />
        </svg>
      </div>
      <div v-if="!hasErrors">
        <p class="font-bold">All right!</p>
        <p class="text-sm">Form passes!</p>
      </div>
      <div v-else>
        <p class="font-bold">There are some errors</p>
        <p class="text-sm">Check the input errors messages</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("form", ["hasErrors"])
  }
};
</script>

<style></style>
