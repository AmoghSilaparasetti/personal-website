<script setup lang="ts">
import ThemeToggle from "@/components/ThemeToggle.vue";
import Hero from "@/components/Hero.vue";
import { useActiveSection } from "@/composables/useActiveSection";

const { setActiveSection } = useActiveSection();
</script>

<template>
  <div class="page">
    <header class="page-header">
      <span class="logo">Amogh Silaparasetti</span>
      <ThemeToggle />
    </header>

    <main>
      <Hero />
      <br />
      <button @click="setActiveSection('Timeline')">TimeLine</button>
      <button @click="setActiveSection('Experience')">Experience</button>
      <button @click="setActiveSection('Projects')">Projects</button>
      <button @click="setActiveSection('Skills')">Skills</button>
      <slot />
    </main>

    <footer class="page-footer">© 2026</footer>
  </div>
</template>

<style scoped>
.page {
  background: var(--color-bg);
  color: var(--color-text);
  min-height: 100vh;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  padding: var(--space-md, 1rem);
}

.page-header {
  display: flex;
  justify-content: space-between;
  padding: var(--space-md, 1rem);
}

main {
  padding: var(--space-md, 1rem);
}
</style>
