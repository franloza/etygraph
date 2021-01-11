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
            galician: 'Galician',
            no_results: 'No results',
            group_by_language: 'Group by language',
            merge_equivalent_nodes: 'Merge equivalent nodes',
            loading: 'Loading',
            info_not_available: 'This information is not available',
            close: 'Close',
            add_descendants: 'Add descendants'
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
            galician: 'Gallego',
            no_results: 'Sin resultados',
            group_by_language: 'Agrupar por idioma',
            merge_equivalent_nodes: 'Unir nodos equivalentes',
            loading: 'Cargando',
            info_not_available: 'Esta información no está disponible',
            close: 'Cerrar',
            add_descendants: 'Añadir descendientes'
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
            galician: 'Galicien',
            no_results: 'Aucun résultat',
            group_by_language: 'Grouper par langue',
            merge_equivalent_nodes: 'Rejoindre des nœuds équivalents',   
            loading: 'Chargement',
            info_not_available: 'Cette information n\'est pas disponible',
            close: 'Fermer',
            add_descendants: 'Ajouter des descendants'
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
            galician: 'Galiziano',
            no_results: 'Nessun risultato',
            group_by_language: 'Raggruppa per lingua',
            merge_equivalent_nodes: 'Unisci nodi equivalenti',
            loading: 'Caricamento',
            info_not_available: 'Questa informazione non è disponibile',
            close: 'Chiudere',
            add_descendants: 'Aggiungi discendenti'
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
            galician: 'Galego',
            no_results: 'Sem resultados',
            group_by_language: 'Grupo por idioma',
            merge_equivalent_nodes: 'Junte nós equivalentes',
            loading: 'Carregamento',
            info_not_available: 'Esta informação não está disponível',
            close: 'Fechar',
            add_descendants: 'Adicionar descendentes'
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
            galician: 'Gallec',
            no_results: 'Sense resultats',
            group_by_language: 'Agrupar per idioma',
            merge_equivalent_nodes: 'Unir nodes equivalents',
            loading: 'Carregant',
            info_not_available: 'Aquesta informació no està disponible',
            close: 'Tancar',
            add_descendants: 'Afegir descendents'
        }
    },
    ga: {
        message: {
            search: 'Buscar',
            language: 'Lingua',
            english: 'Inglés',
            spanish: 'Español',
            french: "Francés",
            italian: "Italiano",
            portuguese: "Portugués",
            catalan: 'Catalán',
            galician: 'Galego',
            no_results: 'Sen resultados',
            group_by_language: 'Grupo por idioma',
            merge_equivalent_nodes: 'Unir nodos equivalentes',
            loading: 'Cargando',
            info_not_available: 'Esta información non está dispoñible',
            close: 'Pechar',
            add_descendants: 'Engade descendentes'
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
    },
    ga: {
        flag: 'es-ga',
        lang: 'glg',
        name: 'galician'
    }
}
