import { useState } from "react";
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';


const Banner = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(true)

    const handleBanner = () => {
        setOpen(!open)
    }

    return (
        <div className={`bg-muted-foreground/90   w-screen  z-50 fixed bottom-0 ${!open ? 'hidden' : 'block'}`}>
         <div className="max-w-screen mx-auto px-4 py-3 flex justify-between text-white ">
                <div className="flex-1 justify-center flex items-start gap-x-4 sm:items-center">
                    <div className="flex-none p-1.5 px-4 rounded-full bg-primary flex items-center justify-center font-medium text-sm">
                        {t('Novedades')}
                    </div>
                    <p className="font-medium p-2">
                        {t('Una nueva version de Itranscard ya esta Disponible!')} <a href="javascript:(0)" className="font-semibold underline duration-150 hover:text-primary inline-flex items-center gap-x-1">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </p>
                </div>
                <button onClick={handleBanner} className="p-2 rounded-lg duration-150 hover:bg-primary text-foreground ring-offset-2 focus:ring bg-muted">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default Banner