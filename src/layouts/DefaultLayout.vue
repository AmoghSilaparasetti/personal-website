<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>

<template>
    <div class = "page">
        <header class="page-header">
            <span class="logo">My Site</span>
            <ThemeToggle />
        </header>
        
        <main>
            <slot />
        </main>

        <footer class="page-footer">
            © 2026
        </footer>
    </div>
</template>

<style scoped>
.page {
    background: var(--color-bg);
    color: var(--color-text);
    min-height: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.page-header{
    display: flex;
    justify-content: space-between;
    padding: var(--space-md) var(--space-lg);
}

main{
    padding: var(--space-lg);
}
</style>