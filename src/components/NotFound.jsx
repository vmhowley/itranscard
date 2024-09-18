import react from "@heroicons/react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 
const NotFound = () => {
    const navigate = useNavigate()
    return (
        <main className="fixed inset-0 z-50 bg-background">
            <div className="flex items-center justify-start h-screen max-w-screen-xl px-4 mx-auto md:px-8">
                <div className="max-w-lg mx-auto space-y-3 text-center">
                    <h3 className="font-semibold text-foreground">
                        404 Error
                    </h3>
                    <p className="text-4xl font-semibold text-muted-foreground sm:text-5xl">
                        Pagina no Encontrada
                    </p>
                    <p className="text-muted-foreground">
                        Disculpa, La pagina que estas buscando no fue encontrada o fue eliminada.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <button onClick={() => {navigate(-1)}} className="block px-4 py-2 font-medium text-white duration-150 rounded-lg bg-primary hover:bg-secondary active:bg-primary">
                            Volver
                        </button>
                        <Link to={'support'} className="block px-4 py-2 font-medium duration-150 border rounded-lg text-muted-foreground hover:bg-gray-50 active:bg-gray-100">
                            Contactar Soporte
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default NotFound;