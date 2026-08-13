<script setup lang="ts">
import { useTheme } from "../composables/useTheme";
import { Sun, Moon } from "lucide-vue-next";
import type { Component } from "vue";

const { theme, toggleTheme } = useTheme();

const iconMap: Record<string, Component> = {
  dark: Sun,
  light: Moon,
};
</script>

<template>
  <button
    @click="toggleTheme"
    :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`"
  >
    <component :is="iconMap[theme]" size="25" aria-hidden="true" />
  </button>
</template>

<style scoped>
button {
  background: none;
  border: none;
  color: var(--color-text, inherit);
}
</style>
