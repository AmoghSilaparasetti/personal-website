<script setup lang="ts">
import DefaultLayout from "./layouts/DefaultLayout.vue";
import Timeline from "./components/Timeline.vue";
import Experience from "./components/Experience.vue";
import ProjectCard from "./components/ProjectCard.vue";
import Skills from "./components/Skills.vue";

import { useActiveSection } from "@/composables/useActiveSection";

const { activeSection } = useActiveSection();
</script>

<template>
  <DefaultLayout>
    <Timeline v-show="activeSection === 'Timeline'" />
    <Experience v-show="activeSection === 'Experience'" />
    <ProjectCard v-show="activeSection === 'Projects'" />
    <Skills v-show="activeSection === 'Skills'" />
  </DefaultLayout>
</template>
