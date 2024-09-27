import React, {useState} from 'react'

function ThemeButton() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    
        const handleTheme = (e) =>{
            if (e.currentTarget.name === 'light') {
                setTheme(e.currentTarget.name)
                document.documentElement.classList.remove('dark')
                localStorage.setItem('theme', e.currentTarget.name)

            }else{
                setTheme(e.currentTarget.name)
                document.documentElement.classList.add(e.currentTarget.name)
                localStorage.setItem('theme', e.currentTarget.name)

            }

        }
    return (
        <div role="radiogroup" className="theme-switcher flex gap-4 p-2 border rounded-full items-center">
            <div className={`h-7 w-7 z-10  rounded-full bg-foreground/40 absolute -translate-x-1 justify-center items-center content-center transition-all duration-500 ${theme === 'system' ? 'translate-x-7' :  theme === 'dark' ? 'translate-x-14':''}`}>
            </div>

        <button
        name='light'
        onClick={handleTheme}
        type="button"
          role="radio"
          data-theme-switcher="true"
          data-active="false"
          className="theme-switcher_switch z-20"
          aria-label="Switch to light theme"
          aria-checked="false"
        >
          <svg
            style={{ color: "currentcolor", width: 16, height: 16 }}
            width={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            shapeRendering="geometricPrecision"
            height={24}
            fill="none"
            data-testid="geist-icon"
            className="icon"
            >
            <circle r={5} cy={12} cx={12} />
            <path d="M12 1v2" />
            <path d="M12 21v2" />
            <path d="M4.22 4.22l1.42 1.42" />
            <path d="M18.36 18.36l1.42 1.42" />
            <path d="M1 12h2" />
            <path d="M21 12h2" />
            <path d="M4.22 19.78l1.42-1.42" />
            <path d="M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
        <button
        name='system'
        onClick={handleTheme}
          type="button"
          role="radio"
          data-theme-switcher="true"
          data-active="false"
          className="theme-switcher_switch"
          aria-label="Switch to system theme"
          aria-checked="false"
          >
          <svg
            style={{ color: "currentcolor", width: 16, height: 16 }}
            width={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            shapeRendering="geometricPrecision"
            height={24}
            fill="none"
            data-testid="geist-icon"
            className="icon"
            >
            <rect ry={2} rx={2} height={14} width={20} y={3} x={2} />
            <path d="M8 21h8" />
            <path d="M12 17v4" />
          </svg>
        </button>
        <button
        name='dark'
        onClick={handleTheme}
        type="button"
        role="radio"
        data-theme-switcher="true"
        data-active="true"
        className="theme-switcher_switch"
        aria-label="Switch to dark theme"
        aria-checked="true"
        >
          <svg
            style={{ color: "currentcolor", width: 16, height: 16 }}
            width={24}
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            shapeRendering="geometricPrecision"
            height={24}
            fill="none"
            data-testid="geist-icon"
            className="icon"
          >
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>
      </div>
      
    )
}
export default ThemeButton;