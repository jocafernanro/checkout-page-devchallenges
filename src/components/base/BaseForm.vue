<template>
  <form class="w-3/5" @submit.prevent>
    <FormGroup
      v-for="(group, index) in formStructure"
      :key="index"
      :group="group"
    ></FormGroup>

    <div class="w-5/6">
      <label class="block items-center mt-4">
        <input
          type="checkbox"
          class="form-checkbox border-gray-600 text-orange-500 h-8 w-8 mr-3"
        />
        <span class="ml-2 font-bold text-md text-gray-600"
          >Save this information for next time</span
        >
      </label>
      <button
        class="bg-orange-500 py-4 px-12 rounded-2xl font-bold text-2xl text-white float-right mt-4"
      >
        Continue
      </button>
    </div>
  </form>
</template>

<script>
import FormGroup from "@/components/form/FormGroup";
export default {
  components: {
    FormGroup
  },
  data: function() {
    return {
      formStructure: [
        {
          title: "Contact Information",
          fields: [{ type: "email" }, { type: "phone" }]
        },
        {
          title: "Shipping address",
          fields: [
            { type: "name" },
            { type: "address" },
            { type: "city" },
            {
              subGroup: [{ type: "country" }, { type: "postalCode" }]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style></style>
