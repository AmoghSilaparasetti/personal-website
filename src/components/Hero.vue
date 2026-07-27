<script setup lang="ts"> 
import {ref} from 'vue'

const tagline = ref('VR roots. Enterprise systems. Applied ML.')

function scrollToSection(sectionID: string) {
    document.getElementById(sectionID)?.scrollIntoView({behavior: 'smooth'})
}
</script>

<template>
    <section class="hero">
        <h1>Amogh Silaparasetti</h1>
        <p class="tagline">{{ tagline}}</p>

        <button @click="scrollToSection('timeline')">TimeLine</button>
    </section>    
</template>

<style scoped>
.hero{
    padding: var(--spacing-x1, 4rem) var(--spacing-md, 1.5rem);
    color: var(--color-text, inherit);
}
</style>