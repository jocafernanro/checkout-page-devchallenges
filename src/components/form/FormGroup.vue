<template>
  <div class="w-5/6 mt-16">
    <h2 class="font-bold text-2xl mb-4">{{ group.title }}</h2>
    <div v-for="(field, index) in group.fields" :key="index">
      <div
        v-if="field.subGroup"
        class="grid gap-x-8"
        :class="`grid-cols-${field.subGroup.length}`"
      >
        <CustomInput
          v-for="(groupedField, index) in field.subGroup"
          :key="index"
          :type="groupedField.type"
          >i</CustomInput
        >
      </div>
      <CustomInput v-else :type="field.type">o</CustomInput>
    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/form/CustomInput.vue";
export default {
  components: {
    CustomInput
  },
  props: {
    group: Object
  }
};
</script>

<style></style>
