const messages = {
    en: {
        message: {
        search: 'Search',
        language: 'Language',
        english: 'English',
        spanish: 'Spanish',
        no_results: 'No results'
        }
    },
    es: {
        message: {
        search: 'Buscar',
        language: 'Idioma',
        english: 'Inglés',
        spanish: 'Español',
        no_results: 'Sin resultados'
        }
    }
}

export const i18n = new VueI18n({
    locale: 'en', 
    messages,
})


export const locale_to_flag = {
    'en': 'gb',
    'es': 'es'
}

export const locale_to_lang = {
'en': 'eng',
'es': 'spa'
}
