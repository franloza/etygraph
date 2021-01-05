const messages = {
    en: {
        message: {
            search: 'Search',
            language: 'Language',
            english: 'English',
            spanish: 'Spanish',
            french: 'French',
            italian: 'Italian',
            portuguese: 'Portuguese',
            catalan: 'Catalan',
            no_results: 'No results',
            group_by_language: 'Group by language',
            merge_equivalent_nodes: 'Merge equivalent nodes'
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
            portuguese: "Portugués",
            catalan: 'Catalán',
            no_results: 'Sin resultados',
            group_by_language: 'Agrupar por idioma',
            merge_equivalent_nodes: 'Unir nodos equivalentes'
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
            portuguese: 'Portugais',
            no_results: 'Aucun résultat',
            group_by_language: 'Grouper par langue',
            merge_equivalent_nodes: 'Rejoindre des nœuds équivalents',            
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
            catalan: 'Catalano',
            portuguese: 'Portoghese',
            no_results: 'Nessun risultato',
            group_by_language: 'Raggruppa per lingua',
            merge_equivalent_nodes: 'Unisci nodi equivalenti'           
        }
    },
    pt: {
        message: {
            search: 'Pesquisa',
            language: 'Língua',
            english: 'Inglês',
            spanish: 'Espanhol',
            french: 'Francês',
            italian: 'Italiano',
            portuguese: 'Português',
            catalan: 'Catalão',
            no_results: 'Sem resultados',
            group_by_language: 'Grupo por idioma',
            merge_equivalent_nodes: 'Junte nós equivalentes' 
        }
    },
    ca: {
        message: {
            search: 'Cercar',
            language: 'Idioma',
            english: 'Anglés',
            spanish: 'Espanyol',
            french: "Francès",
            italian: "Italià",
            portuguese: "Portuguès",
            catalan: 'Català',
            no_results: 'Sense resultats',
            group_by_language: 'Agrupar per idioma',
            merge_equivalent_nodes: 'Unir nodes equivalents' 
        }
    }
}

export const i18n = new VueI18n({
    messages,
    fallbackLocale: 'en'
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
    },
    pt: {
        flag: 'pt',
        lang: 'por',
        name: 'portuguese'
    },
    ca: {
        flag: 'es-ca',
        lang: 'cat',
        name: 'catalan'
    }
}
