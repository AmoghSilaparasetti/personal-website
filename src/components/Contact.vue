<script setup lang="ts">
import { Mail, File } from 'lucide-vue-next'
import {GitHubIcon, ItchDotioIcon} from 'vue3-simple-icons';

import { computed } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { theme } = useTheme()

const linkedInLogoSrc = computed(() =>
  theme.value === 'dark' ? '/InBug-White.png' : '/InBug-Black.png'
)
</script>

<template>
    <div class="links">
        <a href="mailto:amogh.silaparasetti@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
            <Mail :size="25" />
        </a>
        <a href="https://github.com/AmoghSilaparasetti" aria-label="Github" target="_blank" rel="noopener noreferrer">
            <GitHubIcon :size="25" />
        </a>
        <a href="https://gba001.itch.io/" aria-label="Itch.io" target="_blank" rel="noopener noreferrer">
            <ItchDotioIcon :size="25" />
        </a>
        <a href="https://www.linkedin.com/in/amogh-silaparasetti-167886228/" aria-label="Linkedin" target="_blank" rel="noopener noreferrer">
          <img :src="linkedInLogoSrc" alt="" width="25" height="25" />
        </a>
        <a href="/Amogh_Silaparasetti_Resume.pdf" aria-label="Resume" target="_blank" rel="noopener noreferrer">
          <File :size="25"/>
        </a>
    </div>
</template>

<style scoped>
.links{
    display: grid;
    gap: var(--space-sm, 0.5rem);
    grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
}

@media (prefers-reduced-motion: reduce) {
  .links a {
    transition: none;
  }
}

.links a {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  transition: transform 0.2s ease;
  
}

.links a:visited {
  color: var(--color-text);
}

.links a:hover {
  color: var(--color-text);
  transform: scale(1.2);
  transform-origin: center;
}

.links a:active {
  color: var(--color-text);
}
</style>