const messages = {
    en: {
        message: {
            search: 'Search',
            language: 'Language',
            english: 'English',
            spanish: 'Spanish',
            french: 'French',
            italian: 'Italian',
            no_results: 'No results',
        }
    },
    es: {
        message: {
            search: 'Buscar',
            language: 'Idioma',
            english: 'Inglés',
            spanish: 'Español',
            french: "Francés",
            italian: "Italiano",
            no_results: 'Sin resultados'
        }
    },
    fr: {
        message: {
            search: 'Chercher',
            language: 'Langue',
            english: 'Anglaise',
            spanish: 'Espagnole',
            french: 'Français',
            italian: 'Italien',
            no_results: 'Aucun résultat'
        }
    },
    it: {
        message: {
            search: 'Cercare',
            language: 'Linguaggio',
            english: 'Inglese',
            spanish: 'Spagnolo',
            french: 'Francese',
            italian: 'Italiano',
            no_results: 'Nessun risultato'
        }
    },
}

export const i18n = new VueI18n({
    messages,
})

export const locale_data = {
    en: {
        flag: 'gb',
        lang: 'eng',
        name: 'english'
    }, 
    es:  {
        flag: 'es',
        lang: 'spa',
        name: 'spanish'
    }, 
    fr:  {
        flag: 'fr',
        lang: 'fra',
        name: 'french'
    }, 
    it : {
        flag: 'it',
        lang: 'ita',
        name: 'italian'
    }
}
