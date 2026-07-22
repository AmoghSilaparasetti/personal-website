import { ref, watchEffect, type Ref } from 'vue'

type Theme = 'light' | 'dark'

function isValidTheme(value: string | null): value is Theme {
    return value === 'light' || value === 'dark'
}

const storedTheme = localStorage.getItem('theme')
const theme: Ref<Theme> = ref(isValidTheme(storedTheme) ? storedTheme : 'light')

watchEffect(() => {
    document.documentElement.setAttribute('data-theme', theme.value)
    localStorage.setItem('theme', theme.value)
})

export function useTheme(){
    function toggleTheme(): void {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
    return {theme, toggleTheme}
}