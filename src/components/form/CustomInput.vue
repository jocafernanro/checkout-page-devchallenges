<template>
  <div class="mb-4">
    <div class="relative mb-2" v-if="type !== 'country'">
      <label class="text-gray-700 font-bold text-md">{{
        inputData.label
      }}</label>
      <input
        :type="inputData.type"
        :class="errors[type] && 'input-error'"
        class="form-input mt-1 block border-solid w-full border-gray-600 text-gray-800 border-2 pl-12 md:pl-16 py-5 rounded-2xl text-lg md:text-xl font-bold"
        :placeholder="inputData.placeholder"
        v-model="data"
      />
      <i
        class="material-icons absolute top-1/2 ml-3 md:ml-4 text-3xl text-gray-600"
        >{{ inputData.icon }}</i
      >
    </div>

    <div class="relative" v-else>
      <label class="text-gray-700 font-bold text-md">{{
        inputData.label
      }}</label>
      <div class="relative">
        <select
          class="form-input mt-1 block border-solid w-full border-gray-600 text-gray-800 border-2 pl-12 md:pl-16 py-5 rounded-2xl text-lg md:text-xl font-bold"
          v-model="data"
          id="grid-state"
        >
          <option selected hidden disabled value="">Your country...</option>
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
        >
          <svg
            class="fill-current h-6 w-6 bg-gray-300 rounded-lg mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </div>
      </div>
      <i
        class="material-icons absolute top-1/2 ml-3 md:ml-4 text-3xl text-gray-600"
        >{{ inputData.icon }}</i
      >
    </div>

    <span v-if="errors[type]" class="text-red-500 font-bold text-sm"
      >{{ errors[type].error }}
    </span>
  </div>
</template>

<script>
import { mapState } from "vuex";
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
  computed: {
    ...mapState({
      errors: state => state.form.formData.errors
    }),
    data: {
      get() {
        return this.$store.state.form.formData[this.type];
      },
      set(value) {
        this.$store.dispatch("form/changeFormData", {
          value,
          input: this.type
        });
      }
    }
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

<style scoped>
.input-error {
  @apply border-2;
  @apply border-red-600;
}
</style>
