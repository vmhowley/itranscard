import { useState } from "react";
import { useTranslation } from "react-i18next";
import {GlobeAltIcon} from '@heroicons/react/24/outline'
const LangButton =  () => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const [open, setOpen] = useState();
    const handleChangeLanguage = (e) => {
        const newLanguage = e.target.value
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
      }
      const handleOpen = (e) => {
        setOpen(!open)
      }

      return (
        <>
        <button className="w-6 sm:w-6"  onClick={handleOpen}>
        <GlobeAltIcon />
        <div className={`fixed  grid right-2 mt-4 bg-background shadow w-20 z-50 border  divide-y h-16 transition-all duration-300 ${open ? 'visible opacity-100 -translate-y-1':'invisible opacity-0 -translate-y-12 scale-50'}`}>
          <button onClick={handleChangeLanguage} value={'en'}>Ingles</button>
          <button onClick={handleChangeLanguage} value={'es'}>Español</button>
          
        </div>
        </button>

        
        </>
        
    );
  };
  export default LangButton