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
            filter_by_language: 'Filter by language',
            group_by_language: 'Group by language',
            merge_equivalent_nodes: 'Merge equivalent nodes',
            loading: 'Loading',
            info_not_available: 'This information is not available',
            close: 'Close',
            add_descendants: 'Add descendants',
            remove_node: 'Remove word',
            select_language: 'Select Language'
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
            filter_by_language: 'Filtrar por idioma',
            group_by_language: 'Agrupar por idioma',
            merge_equivalent_nodes: 'Unir nodos equivalentes',
            loading: 'Cargando',
            info_not_available: 'Esta información no está disponible',
            close: 'Cerrar',
            add_descendants: 'Añadir descendientes',
            remove_node: 'Eliminar palabra',
            select_language: 'Seleccionar idioma'
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
            filter_by_language: 'Filtrer per langue',
            group_by_language: 'Grouper par langue',
            merge_equivalent_nodes: 'Rejoindre des nœuds équivalents',   
            loading: 'Chargement',
            info_not_available: 'Cette information n\'est pas disponible',
            close: 'Fermer',
            add_descendants: 'Ajouter des descendants',
            remove_node: 'Supprimer mot',
            select_language: 'Sélectionnez une langue'
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
            filter_by_language: 'Filtrare per lingua',
            group_by_language: 'Raggruppa per lingua',
            merge_equivalent_nodes: 'Unisci nodi equivalenti',
            loading: 'Caricamento',
            info_not_available: 'Questa informazione non è disponibile',
            close: 'Chiudere',
            add_descendants: 'Aggiungi discendenti',
            remove_node: 'Cancella parola',
            select_language: 'Seleziona la lingua'
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
            filter_by_language: 'Filtrar por idioma',
            group_by_language: 'Grupo por idioma',
            merge_equivalent_nodes: 'Junte nós equivalentes',
            loading: 'Carregamento',
            info_not_available: 'Esta informação não está disponível',
            close: 'Fechar',
            add_descendants: 'Adicionar descendentes',
            remove_node: 'Eliminar palavra',
            select_language: 'Seleccionar idioma'
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
            filter_by_language: 'Filtrar per idioma',
            group_by_language: 'Agrupar per idioma',
            merge_equivalent_nodes: 'Unir nodes equivalents',
            loading: 'Carregant',
            info_not_available: 'Aquesta informació no està disponible',
            close: 'Tancar',
            add_descendants: 'Afegir descendents',
            remove_node: 'Eliminar paraula',
            select_language: 'Seleccionar idioma'
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
            filter_by_language: 'Filtrar por idioma',
            group_by_language: 'Grupo por idioma',
            merge_equivalent_nodes: 'Unir nodos equivalentes',
            loading: 'Cargando',
            info_not_available: 'Esta información non está dispoñible',
            close: 'Pechar',
            add_descendants: 'Engade descendentes',
            remove_node: 'Eliminar palabra',
            select_language: 'Seleccionar o idioma'
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
