<script setup>
import DefaultLayout from './layouts/DefaultLayout.vue'
import Hero from './components/Hero.vue'
import Timeline from './components/Timeline.vue';
import Experience from './components/Experience.vue'
import ProjectCard from './components/ProjectCard.vue'
import Skills from './components/Skills.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <DefaultLayout>
    <Hero />
    <Contact />
    <Timeline />
    <Experience />
    <ProjectCard />
    <Skills />
  </DefaultLayout>
</template>