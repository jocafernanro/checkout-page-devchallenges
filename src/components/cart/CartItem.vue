<template>
  <div class="flex flex-row">
    <img
      src="images/photo1.png"
      alt="article"
      class="w-5/12 mr-6 rounded-2xl"
    />
    <div class="flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-2xl text-gray-800 mb-2">Vintage Backbag</h3>
        <div>
          <span class="font-bold text-xl text-orange-500 mr-3">$54,99</span>
          <span class="font-bold text-lg text-gray-800">$94.99</span>
        </div>
      </div>
      <div
        class="flex flex-row justify-between items-center border-gray-900 border-2 rounded-2xl p-3 w-10/12"
      >
        <button
          class="bg-gray-300 rounded-lg flex flex-row p-1 justify-center items-center"
        >
          <i class="material-icons text-gray-600">remove</i>
        </button>
        <span class="font-bold text-2xl">1</span>
        <button>
          <button
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
export default {};
</script>

<style></style>
