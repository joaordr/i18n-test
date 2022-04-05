/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";
import { useRouter } from 'next/router'

import { tranlations as tranlationsEN } from '../translations/en'
import { tranlations as tranlationsPT } from '../translations/pt'

export const LanguageContext = createContext({});

export function LanguageProvider({ children }) {
    const router = useRouter();
    const { locale } = router;
    const [translations, setTranslations] = useState(locale == 'pt' ? tranlationsPT : tranlationsEN);

    useEffect(() => {
        if (locale == 'pt') {
            setTranslations(tranlationsPT);
        } else {
            setTranslations(tranlationsEN);
        }
    }, [locale])

    return (
        <LanguageContext.Provider value={{ router, locale, translations }}>
            {children}
        </LanguageContext.Provider>
    )

}