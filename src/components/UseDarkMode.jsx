
import { useCallback, useEffect, useState } from 'react'


// dark mode と light mode を切り替える
export default function UseDarkMode() {
    const [isDarkMode, toggleTheme] = useState(false)
    const toggle = useCallback((isDark) => {
        if (typeof isDark === 'undefined') {
            toggleTheme((state) => !state)
            return
        }
        toggleTheme(true)
    }, [])

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        }
    }, [isDarkMode])

    return (
        <button onClick={() => toggle()}>
            {isDarkMode ? 'light' : 'dark'}
        </button>
    )
}