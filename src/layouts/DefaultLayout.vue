<script setup lang="ts">
import ThemeToggle from "@/components/ThemeToggle.vue";
import Hero from "@/components/Hero.vue";
import { useActiveSection } from "@/composables/useActiveSection";

const { activeSection, setActiveSection } = useActiveSection();
const sections = ["Timeline", "Experience", "Projects", "Skills"] as const;
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
      <div class="tab-track">
        <button
          v-for="section in sections"
          :key="section"
          @click="setActiveSection(section)"
          :class="{ active: activeSection === section }"
        >
          <b>{{ section }}</b>
        </button>
      </div>
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

.tab-track {
  display: inline-flex;
  gap: var(--space-sm);
  padding: var(--space-sm);
  background: var(--color-bg);
  border-radius: 999px;
  font-size: var(--font-size-lg, 2rem);
}

.tab-track button {
  border: none;
  background: transparent;
  color: var(--color-text);
  padding: var(--space-sm) var(--space-md);
  border-radius: 999px;
  cursor: pointer;
}

.tab-track button.active {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

main {
  padding: var(--space-md, 1rem);
}
</style>
