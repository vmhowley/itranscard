import React, {useState} from 'react'

function ThemeButton() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'))
    
        const handleTheme = (e) =>{
          console.log(theme)

            if (theme === 'dark'){
              setTheme('light')
              localStorage.setItem('theme','light')
              document.documentElement.classList.remove('dark')

            }else{
              if (theme === 'light'){
                setTheme('dark')
                localStorage.setItem('theme','dark')
                document.documentElement.classList.add('dark')
              } 
            }

        }
    return (
        <div role="radiogroup" className={`theme-switcher  flex gap-4 p-2 w-6 h-6 sm:h-max sm:w-max justify-center border rounded-full items-center ${theme === 'dark' ? 'text-yellow-500 bg-yellow-300/10':'text-blue-800 bg-blue-300/10'}`}>
        {theme === 'dark' ? 
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
    :<button
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
    </button>}
      </div>
      
    )
}
export default ThemeButton;