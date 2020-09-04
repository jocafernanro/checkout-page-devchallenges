<template>
  <form class="w-full lg:w-3/5" @submit.prevent @keyup.enter="checkForm">
    <FormGroup
      v-for="(group, index) in formStructure"
      :key="index"
      :group="group"
    ></FormGroup>

    <div class="lg:w-5/6">
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
        @click="checkForm"
        class="bg-orange-500 py-4 px-12 rounded-2xl font-bold text-2xl text-white float-right mt-4"
      >
        Continue
      </button>
      <BaseAlert v-if="showAlert"></BaseAlert>
    </div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import FormGroup from "@/components/form/FormGroup";
import BaseAlert from "@/components/base/BaseAlert";
export default {
  components: {
    FormGroup,
    BaseAlert
  },
  data: function() {
    return {
      showAlert: false,
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
  },
  computed: {
    ...mapState({
      formData: state => state.form.formData
    })
  },
  methods: {
    check(checkerFails, errors, property, error) {
      if (checkerFails()) {
        errors[property] = error;
      } else {
        delete errors[property];
      }
    },
    checkForm() {
      let errors = {};
      this.showAlert = true;

      // Utilies
      const onlyDigits = value => /^\d+$/.test(value);
      const onlyLetters = value => /^[a-zA-Z ]*$/.test(value);
      const isEmailValid = () =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.formData.email);

      // Validators
      const emailErrors = () => !this.formData.email || !isEmailValid();

      const phoneErrors = () =>
        !this.formData.phone ||
        !onlyDigits(this.formData.phone) ||
        this.formData.phone < 1e4;

      const nameErrors = () =>
        !this.formData.name ||
        this.formData.name.length < 5 ||
        !onlyLetters(this.formData.name);

      const addressErrors = () =>
        !this.formData.address ||
        this.formData.address.length < 5 ||
        onlyDigits(this.formData.address);

      const cityErrors = () =>
        !this.formData.city ||
        this.formData.city.length < 4 ||
        !onlyLetters(this.formData.city);

      const countryErrors = () =>
        !this.formData.name ||
        this.formData.name.length < 5 ||
        !onlyLetters(this.formData.country);

      const postalCodeErrors = () =>
        !this.formData.postalCode ||
        !onlyDigits(this.formData.postalCode) ||
        this.formData.postalCode < 4;

      this.check(emailErrors, errors, "email", {
        error:
          "Email must be filled and contains an email structure email@domain.com"
      });

      this.check(phoneErrors, errors, "phone", {
        error:
          "Phone must be filled, contains only numbers and more than 4 chars"
      });

      this.check(nameErrors, errors, "name", {
        error:
          "Name must be filled, filled as text and contains more than 4 chars"
      });

      this.check(addressErrors, errors, "address", {
        error:
          "Address must be filled, filled as text and contains more than 4 chars"
      });

      this.check(cityErrors, errors, "city", {
        error:
          "City must be filled, filled as text and contains more than 3 chars"
      });

      this.check(countryErrors, errors, "country", {
        error:
          "Country must be filled, filled as text and contains more than 4 chars"
      });

      this.check(postalCodeErrors, errors, "postalCode", {
        error:
          "Postal code must be filled, contains numbers and more than 3 chars"
      });

      this.$store.dispatch("form/setError", errors);
      setTimeout(() => {
        this.showAlert = false;
      }, 3000);
    }
  }
};
</script>

<style></style>
