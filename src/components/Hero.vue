<script setup lang="ts">
import Contact from "./Contact.vue";
import { ref } from "vue";

const tagline = ref("VR roots. Enterprise systems. Applied ML.");
</script>

<template>
  <section class="hero">
    <h1>Amogh Silaparasetti</h1>
    <p class="tagline">{{ tagline }}</p>
  </section>
  <Contact />
</template>

<style scoped>
.hero {
  padding: var(--spacing-sm, 0.5rem);
  color: var(--color-text, inherit);
}
</style>
