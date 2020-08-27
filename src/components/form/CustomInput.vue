<template>
  <div class="relative mb-4">
    <label class="text-gray-700 font-bold text-md">{{ inputData.label }}</label>
    <input
      :type="inputData.type"
      class="form-input mt-1 block border-solid w-full border-gray-600 text-gray-600 border-2 pl-16 py-5 rounded-2xl text-xl font-bold"
      :placeholder="inputData.placeholder"
    />
    <i class="material-icons absolute top-1/2 ml-4 text-3xl text-gray-600">{{
      inputData.icon
    }}</i>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    form: String
  },
  data: function() {
    return {
      inputData: "",
      inputForm: "",
      input: {
        email: {
          type: "email",
          label: "E-mail",
          icon: "email",
          placeholder: "Enter your email..."
        },
        phone: {
          type: "tel",
          label: "Phone",
          icon: "call",
          placeholder: "Enter your phone..."
        },
        name: {
          type: "text",
          label: "Full name",
          icon: "account_circle",
          placeholder: "Enter your name..."
        },
        address: {
          type: "text",
          label: "Address",
          icon: "home",
          placeholder: "Your adresss..."
        },
        city: {
          type: "text",
          label: "City",
          icon: "location_city",
          placeholder: "Your city..."
        },
        country: {
          type: "text",
          label: "Country",
          icon: "public",
          placeholder: "Your country..."
        },
        postalCode: {
          type: "text",
          label: "Postal code",
          icon: "markunread_mailbox",
          placeholder: "Your postal code..."
        }
      }
    };
  },
  mounted() {
    this.inputData = this.getInputData();
  },
  methods: {
    getInputData() {
      return this.input[this.type || "text"];
    }
  }
};
</script>

<style></style>
