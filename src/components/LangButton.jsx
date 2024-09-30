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
        <button onClick={handleOpen}>
        <GlobeAltIcon width={30}/>
        <div className={`fixed grid mt-4 bg-background shadow w-20  gap-2 divide-y transition-opacity duration-300 ${open ? 'visible opacity-100':'invisible opacity-0 '}`}>
          <button onClick={handleChangeLanguage} value={'en'}>Ingles</button>
          <button onClick={handleChangeLanguage} value={'es'}>Español</button>
          
        </div>
        </button>

        
        </>
        
    );
  };
  export default LangButton