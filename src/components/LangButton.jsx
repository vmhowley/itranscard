import { useState } from "react";
import { useTranslation } from "react-i18next";
const LangButton =  () => {
    const { t, i18n: {changeLanguage, language} } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const handleChangeLanguage = (e) => {
        const newLanguage = e.target.value
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
      }

    return (

        <select defaultValue={'en'} name="lang"  onChange={handleChangeLanguage} className="w-full px-3 justify-center flex text-center py-2 text-sm text-gray-600 bg-white border rounded-lg shadow-sm outline-none appearance-none focus:ring-offset-2 focus:ring-indigo-600 focus:ring-2">
          <option  value={'en'}>{t('Ingles')}</option>
          <option  value={'es'}>{t('Español')}</option>
        </select>
        
    );
  };
  export default LangButton