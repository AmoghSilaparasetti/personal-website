<script setup>
import {useTheme} from '../composables/useTheme'
const {theme, toggleTheme} = useTheme()
</script>

<template>
    <button @click="toggleTheme" :aria-label="`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`">
        {{ theme === 'light' ? '🌙' : '☀️' }}
    </button>
</template>