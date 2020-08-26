<template>
  <div id="app" class="container mx-auto">
    <BaseHeader></BaseHeader>
    <section class="flex flex-row">
      <BaseForm></BaseForm>
      <BaseCart></BaseCart>
    </section>

    <BaseFooter></BaseFooter>
  </div>
</template>

<script>
import BaseHeader from "@/components/base/BaseHeader.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseCart from "@/components/base/BaseCart.vue";
import BaseFooter from "@/components/base/BaseFooter.vue";

export default {
  name: "App",
  components: {
    BaseHeader,
    BaseForm,
    BaseCart,
    BaseFooter
  }
};
</script>

<style>
:root {
  --global-font-family: "Montserrat", "Helvetica Neue", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --global-font-size: 1rem;
  --font-weight-regular: 400;
  --font-weight-bold: 700;
}
html,
body {
  font-family: var(--global-font-family);
  font-size: 16px;
  font-weight: var(--font-weight-regular);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
  margin: 0 auto;
}
</style>
