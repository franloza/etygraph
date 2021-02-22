export function getEtymologyLanguages() {

    var etymology_languages = {};

    // Albanian varieties
    etymology_languages["aln"] = {
        canonicalName: "Gheg Albanian",
        aliases : ["Gheg"],
        parent: "sq",
        wikidata_item: "Q181037",
    }

    etymology_languages["aae"] = {
        canonicalName: "Arbëresh Albanian",
        aliases : ["Arbëreshë", "Arbëresh"],
        parent: "sq",
        wikidata_item: "Q1075302",
    }

    etymology_languages["aat"] = {
        canonicalName: "Arvanitika Albanian",
        aliases : ["Arvanitika"],
        parent: "sq",
        wikidata_item: "Q29347",
    }

    etymology_languages["als"] = {
        canonicalName: "Tosk Albanian",
        aliases : ["Tosk"],
        parent: "sq",
        wikidata_item: "Q180937",
    }

    // Bantu varieties

    etymology_languages["bnt-cmn"] = {
        canonicalName: "Common Bantu",
        parent: "bnt-pro",
    }

    // Semitic varieties

    // Akkadian varieties

    etymology_languages["akk-old"] = {
        canonicalName: "Old Akkadian",
        parent: "akk",
    }

    etymology_languages["akk-obb"] = {
        canonicalName: "Old Babylonian",
        parent: "akk",
    }

    etymology_languages["akk-oas"] = {
        canonicalName: "Old Assyrian",
        parent: "akk",
    }

    etymology_languages["akk-mbb"] = {
        canonicalName: "Middle Babylonian",
        parent: "akk",
    }

    etymology_languages["akk-mas"] = {
        canonicalName: "Middle Assyrian",
        parent: "akk",
    }

    etymology_languages["akk-nbb"] = {
        canonicalName: "Neo-Babylonian",
        parent: "akk",
    }

    etymology_languages["akk-nas"] = {
        canonicalName: "Neo-Assyrian",
        parent: "akk",
    }

    etymology_languages["akk-lbb"] = {
        canonicalName: "Late Babylonian",
        parent: "akk",
    }

    // Aramaic varieties

    etymology_languages["arc-bib"] = {
        canonicalName: "Biblical Aramaic",
        parent: "arc",
    }

    etymology_languages["arc-imp"] = {
        canonicalName: "Imperial Aramaic",
        aliases : ["Official Aramaic"],
        parent: "arc",
    }

    etymology_languages["arc-hat"] = {
        canonicalName: "Hatran Aramaic",
        parent: "arc",
    }

    etymology_languages["sem-jar"] = {
        canonicalName: "Jewish Aramaic",
        aliases : ["Judeo-Aramaic"],
        parent: "arc",
        wikidata_item: "Q2633045",
    }

    etymology_languages["arc-pal"] = {
        canonicalName: "Palmyrene Aramaic",
        parent: "arc",
    }

    etymology_languages["tmr"] = {
        canonicalName: "Jewish Babylonian Aramaic",
        parent: "arc",
        wikidata_item: "Q33407",
    }

    etymology_languages["jpa"] = {
        canonicalName: "Jewish Palestinian Aramaic",
        aliases : ["Galilean Aramaic"],
        parent: "arc",
        wikidata_item: "Q948909",
    }

    etymology_languages["arc-cpa"] = {
        canonicalName: "Christian Palestinian Aramaic",
        aliases : ["Melkite Aramaic", "Palestinian Syriac", "Syropalestinian Aramaic"],
        parent: "arc",
        wikidata_item: "Q60790119",
    }

    // Catalan varieties

    etymology_languages["ca-val"] = {
        canonicalName: "Valencian",
        parent: "ca",
        wikidata_item: "Q32641",
    }

    // Central Nicobarese varieties

    etymology_languages["ncb-cam"] = {
        canonicalName: "Camorta",
        aliases : ["Kamorta"],
        parent: "ncb",
        wikidata_item: "Q5026908",
    }

    etymology_languages["ncb-kat"] = {
        canonicalName: "Katchal",
        aliases : ["Tehnu"],
        parent: "ncb",
        wikidata_item: "Q17064263",
    }

    etymology_languages["ncb-nan"] = {
        canonicalName: "Nancowry",
        aliases : ["Nankwari"],
        parent: "ncb",
        wikidata_item: "Q6962504",
    }

    // Chinese varieties

    etymology_languages["och-ear"] = {
        canonicalName: "Early Old Chinese",
        parent: "och",
    }

    etymology_languages["och-lat"] = {
        canonicalName: "Late Old Chinese",
        parent: "och",
    }

    etymology_languages["ltc-ear"] = {
        canonicalName: "Early Middle Chinese",
        parent: "ltc",
    }

    etymology_languages["ltc-lat"] = {
        canonicalName: "Late Middle Chinese",
        parent: "ltc",
    }

    etymology_languages["cmn-ear"] = {
        canonicalName: "Early Mandarin",
        parent: "cmn",
    }

    etymology_languages["wuu-sha"] = {
        canonicalName: "Shanghainese",
        parent: "wuu",
        wikidata_item: "Q36718",
    }

    etymology_languages["hsn-old"] = {
        canonicalName: "Old Xiang",
        aliases : ["Lou-Shao"],
        parent: "hsn",
        wikidata_item: "Q7085453",
    }

    etymology_languages["zhx-pin"] = {
        canonicalName: "Pinghua",
        parent: "yue",
        wikidata_item: "Q2735715",
    }

    etymology_languages["nan-hai"] = {
        canonicalName: "Hainanese",
        parent: "nan",
        wikidata_item: "Q934541",
    }

    etymology_languages["nan-hok"] = {
        canonicalName: "Hokkien",
        parent: "nan",
        wikidata_item: "Q1624231",
    }

    etymology_languages["nan-xm"] = {
        canonicalName: "Amoy",
        aliases : ["Xiamenese"],
        parent: "nan-hok",
        wikidata_item: "Q68744",
    }

    etymology_languages["nan-zz"] = {
        canonicalName: "Zhangzhou Hokkien",
        parent: "nan-hok",
    }

    etymology_languages["nan-qz"] = {
        canonicalName: "Quanzhou Hokkien",
        parent: "nan-hok",
    }

    etymology_languages["nan-jj"] = {
        canonicalName: "Jinjiang Hokkien",
        parent: "nan-qz",
    }

    etymology_languages["nan-ph"] = {
        canonicalName: "Philippine Hokkien",
        parent: "nan-jj",
        wikidata_item: "Q3236692",
    }

    // Coptic varieties

    etymology_languages["cop-akh"] = {
        canonicalName: "Akhmimic Coptic",
        aliases : ["Akhmimic"],
        parent: "cop",
    }

    etymology_languages["cop-boh"] = {
        canonicalName: "Bohairic Coptic",
        aliases : ["Bohairic", "Memphitic Coptic", "Memphitic"],
        parent: "cop",
        wikidata_item: "Q890733",
    }

    etymology_languages["cop-ggg"] = {
        canonicalName: "Coptic Dialect G",
        aliases : ["Dialect G", "Mansuric Coptic", "Mansuric"],
        parent: "cop",
    }

    etymology_languages["cop-jjj"] = {
        canonicalName: "Coptic Dialect J",
        parent: "cop",
    }

    etymology_languages["cop-kkk"] = {
        canonicalName: "Coptic Dialect K",
        parent: "cop",
    }

    etymology_languages["cop-ppp"] = {
        canonicalName: "Coptic Dialect P",
        aliases : ["Proto-Theban Coptic", "Palaeo-Theban Coptic"],
        parent: "cop",
    }

    etymology_languages["cop-fay"] = {
        canonicalName: "Fayyumic Coptic",
        aliases : ["Fayyumic", "Faiyumic Coptic", "Faiyumic", "Fayumic Coptic", "Fayumic",
            "Bashmuric Coptic", "Bashmuric"],
        parent: "cop",
        wikidata_item: "Q1399115",
    }

    etymology_languages["cop-her"] = {
        canonicalName: "Hermopolitan Coptic",
        aliases : ["Hermopolitan", "Coptic Dialect H", "Ashmuninic", "Ashmuninic Coptic"],
        parent: "cop",
    }

    etymology_languages["cop-lyc"] = {
        canonicalName: "Lycopolitan Coptic",
        aliases : [
            "Lycopolitan",
            "Assiutic Coptic", "Asyutic Coptic", "Assiutic", "Asyutic",
            "Lyco-Diospolitan Coptic", "Lyco-Diospolitan",
            "Subakhmimic Coptic", "Subakhmimic"
        ],
        parent: "cop",
    }

    etymology_languages["cop-old"] = {
        canonicalName: "Old Coptic",
        parent: "cop",
    }

    etymology_languages["cop-oxy"] = {
        canonicalName: "Oxyrhynchite Coptic",
        aliases : ["Oxyrhynchite", "Mesokemic Coptic", "Mesokemic", "Middle Egyptian Coptic"],
        parent: "cop",
    }

    etymology_languages["cop-ply"] = {
        canonicalName: "Proto-Lycopolitan Coptic",
        aliases : ["Coptic Dialect i", "Proto-Lyco-Diospolitan Coptic"],
        parent: "cop",
    }

    etymology_languages["cop-sah"] = {
        canonicalName: "Sahidic Coptic",
        aliases : ["Sahidic", "Saidic Coptic", "Saidic", "Thebaic Coptic", "Thebaic"],
        parent: "cop",
        wikidata_item: "Q2645851",
    }

    // Egyptian varieties

    etymology_languages["egy-old"] = {
        canonicalName: "Old Egyptian",
        parent: "egy",
        wikidata_item: "Q447117",
    }

    etymology_languages["egy-mid"] = {
        canonicalName: "Middle Egyptian",
        aliases : ["Classical Egyptian"],
        parent: "egy",
        wikidata_item: "Q657330",
    }

    etymology_languages["egy-nmi"] = {
        canonicalName: "Neo-Middle Egyptian",
        aliases : ["Égyptien de tradition", "Traditional Egyptian"],
        parent: "egy",
    }

    etymology_languages["egy-lat"] = {
        canonicalName: "Late Egyptian",
        parent: "egy",
        wikidata_item: "Q1852329",
    }

    // Elamite varieties

    etymology_languages["elx-old"] = {
        canonicalName: "Old Elamite",
        parent: "elx",
    }

    etymology_languages["elx-mid"] = {
        canonicalName: "Middle Elamite",
        parent: "elx",
    }

    etymology_languages["elx-neo"] = {
        canonicalName: "Neo-Elamite",
        parent: "elx",
    }

    etymology_languages["elx-ach"] = {
        canonicalName: "Achaemenid Elamite",
        parent: "elx",
    }

    // English, Scots and Old English varieties

    etymology_languages["en-GB"] = {
        canonicalName: "British English",
        parent: "en",
        wikidata_item: "Q7979",
    }
    etymology_languages["British English"] = etymology_languages["en-GB"]
    etymology_languages["BE."] = etymology_languages["en-GB"]

    etymology_languages["en-US"] = {
        canonicalName: "American English",
        parent: "en",
        wikidata_item: "Q7976",
    }
    etymology_languages["American English"] = etymology_languages["en-US"]
    etymology_languages["AE."] = etymology_languages["en-US"]

    etymology_languages["en-geo"] = {
        canonicalName: "Geordie English",
        parent: "en",
    }

    // Scots varieties

    etymology_languages["sco-osc"] = {
        canonicalName: "Early Scots",
        parent: "enm",
        wikidata_item: "Q5326738",
    }
    etymology_languages["Early Scots"] = etymology_languages["sco-osc"]
    etymology_languages["Old Scots"] = etymology_languages["sco-osc"]
    etymology_languages["O.Sc."] = etymology_languages["sco-osc"]

    etymology_languages["sco-smi"] = {
        canonicalName: "Middle Scots",
        parent: "sco-osc",
        wikidata_item: "Q3327000",
    }
    etymology_languages["Middle Scots"] = etymology_languages["sco-smi"]
    etymology_languages["Mid.Sc."] = etymology_languages["sco-smi"]

    etymology_languages["sco-ins"] = {
        canonicalName: "Insular Scots",
        parent: "sco",
        wikidata_item: "Q16919205",
    }
    etymology_languages["Insular Scots"] = etymology_languages["sco-ins"]
    etymology_languages["Ins.Sc."] = etymology_languages["sco-ins"]

    etymology_languages["sco-uls"] = {
        canonicalName: "Ulster Scots",
        parent: "sco",
        wikidata_item: "Q201966",
    }
    etymology_languages["Ulster Scots"] = etymology_languages["sco-uls"]
    etymology_languages["Uls.Sc."] = etymology_languages["sco-uls"]

    etymology_languages["sco-nor"] = {
        canonicalName: "Northern Scots",
        parent: "sco",
        wikidata_item: "Q16928150",
    }
    etymology_languages["Northern Scots"] = etymology_languages["sco-nor"]
    etymology_languages["Nor.Sc."] = etymology_languages["sco-nor"]

    etymology_languages["sco-sou"] = {
        canonicalName: "South Scots",
        parent: "sco",
        wikidata_item: "Q7570457",
    }
    etymology_languages["Southern Scots"] = etymology_languages["sco-sou"]
    etymology_languages["Borders Scots"] = etymology_languages["sco-sou"]
    etymology_languages["Sou.Sc."] = etymology_languages["sco-sou"]

    // Middle English varieties
    etymology_languages["enm-nor"] = {
        canonicalName: "Northern Middle English",
        aliases : ["Northumbrian Middle English"],
        parent: "enm",
    }

    // Old English varieties

    // Includes both Mercian and Northumbrian.
    etymology_languages["ang-ang"] = {
        canonicalName: "Anglian Old English",
        parent: "ang",
    }

    etymology_languages["ang-mer"] = {
        canonicalName: "Mercian Old English",
        parent: "ang",
    }

    etymology_languages["ang-nor"] = {
        canonicalName: "Northumbrian Old English",
        parent: "ang",
        wikidata_item: "Q1798915",
    }

    etymology_languages["ang-wsx"] = {
        canonicalName: "West Saxon Old English",
        parent: "ang",
    }


    // French and Norman varieties
    etymology_languages["fro-nor"] = {
        canonicalName: "Old Northern French",
        aliases : ["Old Norman", "Old Norman French"],
        parent: "fro",
        wikidata_item: "Q2044917",
    }
    etymology_languages["Old Northern French"] = etymology_languages["fro-nor"]
    etymology_languages["ONF."] = etymology_languages["fro-nor"]

    etymology_languages["fro-pic"] = {
        canonicalName: "Picard Old French",
        parent: "fro",
    }

    etymology_languages["xno"] = {
        canonicalName: "Anglo-Norman",
        parent: "fro",
        wikidata_item: "Q35214",
    }

    etymology_languages["fr-CA"] = {
        canonicalName: "Canadian French",
        parent: "fr",
        wikidata_item: "Q1450506",
    }
    etymology_languages["Canadian French"] = etymology_languages["fr-CA"]
    etymology_languages["CF."] = etymology_languages["fr-CA"]

    etymology_languages["fr-CH"] = {
        canonicalName: "Switzerland French",
        parent: "fr",
        wikidata_item: "Q1480152",
    }
    etymology_languages["Swiss French"] = etymology_languages["fr-CH"]
    etymology_languages["Switzerland French"] = etymology_languages["fr-CH"]

    etymology_languages["fr-aca"] = {
        canonicalName: "Acadian French",
        parent: "fr",
        wikidata_item: "Q415109",
    }
    etymology_languages["Acadian French"] = etymology_languages["fr-aca"]
    etymology_languages["fra-aca"] = etymology_languages["fr-aca"]

    etymology_languages["frc"] = {
        canonicalName: "Cajun French",
        aliases : ["Louisiana French"],
        parent: "fr",
        wikidata_item: "Q880301",
    }

    // Norman varieties

    etymology_languages["roa-grn"] = {
        canonicalName: "Guernsey Norman",
        aliases : ["Guernsey"],
        parent: "nrf",
        wikidata_item: "Q56428",
    }
    etymology_languages["nrf-grn"] = etymology_languages["roa-grn"]

    etymology_languages["roa-jer"] = {
        canonicalName: "Jersey Norman",
        aliases : ["Jersey"],
        parent: "nrf",
        wikidata_item: "Q56430",
    }
    etymology_languages["nrf-jer"] = etymology_languages["roa-jer"]

    // Brythonic

    etymology_languages["bry-ear"] = {
        canonicalName: "Early Brythonic",
        parent: "cel-bry-pro",
    }

    etymology_languages["bry-lat"] = {
        canonicalName: "Late Brythonic",
        parent: "cel-bry-pro",
    }

    // Gaulish

    etymology_languages["xcg"] = {
        canonicalName: "Cisalpine Gaulish",
        parent: "cel-gau",
        wikidata_item: "Q3832927",
    }

    etymology_languages["xtg"] = {
        canonicalName: "Transalpine Gaulish",
        parent: "cel-gau",
        wikidata_item: "Q29977",
    }

    // Portuguese varieties

    etymology_languages["pt-BR"] = {
        canonicalName: "Brazilian Portuguese",
        parent: "pt",
        wikidata_item: "Q750553"
    }

    // Spanish varieties

    etymology_languages["es-AR"] = {
        canonicalName: "Rioplatense Spanish",
        parent: "es",
        wikidata_item: "Q509780",
    }

    etymology_languages["es-MX"] = {
        canonicalName: "Mexican Spanish",
        parent: "es",
        wikidata_item: "Q616620",
    }

    etymology_languages["es-US"] = {
        canonicalName: "United States Spanish",
        aliases : ["US Spanish"],
        parent: "es",
        wikidata_item: "Q2301077",
    }
    //use label "US Spanish" to put Spanish terms in this category

    // Germanic varieties
    // (modern) German varieties

    etymology_languages["de-AT"] = {
        canonicalName: "Austrian German",
        parent: "de",
        wikidata_item: "Q306626",
    }
    etymology_languages["Austrian German"] = etymology_languages["de-AT"]
    etymology_languages["AG."] = etymology_languages["de-AT"]

    etymology_languages["de-AT-vie"] = {
        canonicalName: "Viennese German",
        parent: "de-AT",
        wikidata_item: "Q56474",
    }
    etymology_languages["Viennese German"] = etymology_languages["de-AT-vie"]
    etymology_languages["VG."] = etymology_languages["de-AT-vie"]

    etymology_languages["de-CH"] = {
        canonicalName: "Swiss High German",
        aliases : ["Schweizer Hochdeutsch", "Swiss Standard German"],
        parent: "de",
        wikidata_item: "Q1366643",
    }

    etymology_languages["ksh"] = {
        canonicalName: "Kölsch",
        parent: "gmw-cfr",
        wikidata_item: "Q4624",
    }
    etymology_languages["Kölsch"] = etymology_languages["ksh"]

    etymology_languages["pfl"] = {
        canonicalName: "Palatine German",
        aliases : ["Pfälzisch", "Pälzisch", "Palatinate German"],
        parent: "gmw-rfr",
        wikidata_item: "Q23014",
    }

    etymology_languages["sli"] = {
        canonicalName: "Silesian German",
        aliases : ["Silesian"],
        parent: "gmw-ecg",
        wikidata_item: "Q152965",
    }

    etymology_languages["sxu"] = {
        canonicalName: "Upper Saxon",
            parent: "gmw-ecg",
        wikidata_item: "Q699284",
    }

    // Old High German varieties

    etymology_languages["lng"] = {
        canonicalName: "Lombardic",
        parent: "goh",
        wikidata_item: "Q35972",
    }
    etymology_languages["Lombardic"] = etymology_languages["lng"]
    etymology_languages["goh-lng"] = etymology_languages["lng"]

    // Proto-West Germanic varieties

    etymology_languages["frk"] = {
        canonicalName: "Frankish",
        aliases : ["Old Frankish"],
        parent: "gmw-pro",
        wikidata_item: "Q10860505",
    }

    // Old Norse varieties

    etymology_languages["non-oen"] = {
        canonicalName: "Old East Norse",
        parent: "non",
        wikidata_item: "Q10498031",
    }

    etymology_languages["non-ogt"] = {
        canonicalName: "Old Gutnish",
        aliases : ["Old Gotlandic"],
        parent: "non",
        wikidata_item: "Q1133488",
    }

    etymology_languages["non-own"] = {
        canonicalName: "Old West Norse",
        parent: "non",
        wikidata_item: "Q10498026",
    }


    // Greek varieties

    etymology_languages["qfa-sub-grc"] = {
        canonicalName: "Pre-Greek",
        parent: "qfa-sub",
        wikidata_item: "Q965052",
    }
    etymology_languages["pregrc"] = etymology_languages["qfa-sub-grc"]

    etymology_languages["grc-boi"] = {
        canonicalName: "Boeotian Greek",
        parent: "grc-aeo",
        wikidata_item: "Q406373",
    }

    etymology_languages["grc-koi"] = {
        canonicalName: "Koine Greek",
        aliases : ["Hellenistic Greek"],
        parent: "grc",
        wikidata_item: "Q107358",
    }
    etymology_languages["Koine"] = etymology_languages["grc-koi"]

    etymology_languages["gkm"] = {
        canonicalName: "Byzantine Greek",
        aliases : ["Medieval Greek"],
        parent: "grc",
        wikidata_item: "Q36387",
    }
    etymology_languages["Medieval Greek"] = etymology_languages["gkm"]

    etymology_languages["grc-dor"] = {
        canonicalName: "Doric Greek",
        parent: "grc",
        wikidata_item: "Q285494",
    }

    etymology_languages["grc-att"] = {
        canonicalName: "Attic Greek",
        parent: "grc",
        wikidata_item: "Q506588",
    }

    etymology_languages["grc-ion"] = {
        canonicalName: "Ionic Greek",
        parent: "grc",
        wikidata_item: "Q504165",
    }

    etymology_languages["grc-pam"] = {
        canonicalName: "Pamphylian Greek",
        parent: "grc",
        wikidata_item: "Q2271793",
    }

    etymology_languages["grc-kre"] = { // code used elsewhere: see [[Module:grc:Dialects]]
        canonicalName: "Cretan Ancient Greek", // to distinguish from Cretan Greek below
        parent: "grc-dor",
    }

    etymology_languages["grc-arp"] = {
        canonicalName: "Arcadocypriot Greek",
        parent: "grc",
        wikidata_item: "Q499602",
    }

    etymology_languages["grc-arc"] = {
        canonicalName: "Arcadian Greek",
        parent: "grc-arp",
    }

    etymology_languages["el-cyp"] = {
        canonicalName: "Cypriot Greek",
        aliases : ["Cypriotic Greek"],
        parent: "el",
    }

    etymology_languages["el-pap"] = {
        canonicalName: "Paphian Greek",
        parent: "el",
    }

    etymology_languages["grc-aeo"] = {
        canonicalName: "Aeolic Greek",
        aliases : ["Lesbic Greek", "Lesbian Greek", "Aeolian Greek"],
        parent: "grc",
        wikidata_item: "Q406373",
    }

    etymology_languages["loc-ozo"] = {
        canonicalName: "Ozolian Locrian",
        parent: "grc",
    }

    etymology_languages["loc-opu"] = {
        canonicalName: "Opuntian Locrian",
        parent: "grc",
    }

    etymology_languages["grc-ths"] = {
        canonicalName: "Thessalian Greek",
        parent: "grc-aeo",
        wikidata_item: "Q406373",
    }

    etymology_languages["grc-ela"] = {
        canonicalName: "Elean Greek",
        parent: "grc",
    }

    etymology_languages["grc-epc"] = {
        canonicalName: "Epic Greek",
        aliases : ["Homeric Greek"],
        parent: "grc",
        wikidata_item: "Q990062",
    }

    etymology_languages["el-crt"] = {
        canonicalName: "Cretan Greek",
        parent: "el",
        wikidata_item: "Q588306",
    }


    // Hebrew varieties

    etymology_languages["hbo"] = {
        canonicalName: "Biblical Hebrew",
        aliases : ["Classical Hebrew"],
        parent: "he",
        wikidata_item: "Q1982248",
    }

    etymology_languages["he-mis"] = {
        canonicalName : "Mishnaic Hebrew",
        parent: "he",
        wikidata_item: "Q1649362",
    }

    etymology_languages["he-med"] = {
        canonicalName : "Medieval Hebrew",
        parent: "he",
        wikidata_item: "Q2712572",
    }

    etymology_languages["he-IL"] = {
        canonicalName: "Modern Israeli Hebrew",
        parent: "he",
        wikidata_item: "Q8141",
    }

    etymology_languages["bsh-kat"] = {
        canonicalName : "Kativiri",
        aliases : ["Katə́viri"],
        parent: "bsh",
        wikidata_item : "Q2605045",
    }

    etymology_languages["bsh-kam"] = {
        canonicalName : "Kamviri",
        aliases : ["Kamvíri"],
        parent: "bsh",
        wikidata_item : "Q1193495",
    }
    etymology_languages["xvi"] = etymology_languages["bsh-kam"]

    etymology_languages["bsh-mum"] = {
        canonicalName : "Mumviri",
        aliases : ["Mumvíri"],
        parent: "bsh"
    }

    // Iranian varieties:

    etymology_languages["qfa-sub-bma"] = {
        canonicalName: "the BMAC substrate",
        parent: "qfa-sub",
        wikidata_item: "Q1054850",
    }

    // Historical and current Iranian dialects

    etymology_languages["ae-old"] = {
        canonicalName: "Old Avestan",
        aliases : ["Gathic Avestan"],
        parent: "ae",
        wikidata_item: "Q29572",
    }

    etymology_languages["ae-yng"] = {
        canonicalName: "Younger Avestan",
        aliases : ["Young Avestan"],
        parent: "ae-old",
    }

    etymology_languages["bcc"] = {
        canonicalName: "Southern Balochi",
        aliases : ["Southern Baluchi"],
        parent: "bal",
        wikidata_item: "Q33049",
    }
    etymology_languages["bal-sou"] = etymology_languages["bcc"]

    etymology_languages["bgp"] = {
        canonicalName: "Eastern Balochi",
        aliases : ["Eastern Baluchi"],
        parent: "bal",
        wikidata_item: "Q33049",
    }
    etymology_languages["bal-eas"] = etymology_languages["bgp"]

    etymology_languages["bgn"] = {
        canonicalName: "Western Balochi",
        aliases : ["Western Baluchi"],
        parent: "bal",
        wikidata_item: "Q33049",
    }
    etymology_languages["bal-wes"] = etymology_languages["bgn"]

    etymology_languages["bgn"] = {
        canonicalName: "Western Balochi",
        aliases : ["Western Baluchi"],
        parent: "bal",
    }

    etymology_languages["bsg-ban"] = {
        canonicalName: "Bandari",
        parent: "bsg",
    }

    etymology_languages["bsg-bas"] = {
        canonicalName: "Bashkardi",
        parent: "bsg",
    }

    etymology_languages["bsg-hor"] = {
        canonicalName: "Hormozi",
        parent: "bsg",
    }

    etymology_languages["bsg-min"] = {
        canonicalName: "Minabi",
        parent: "bsg",
    }

    etymology_languages["ira-mid"] = {
        canonicalName: "Middle Iranian",
        parent: "ira",
        wikidata_item: "Q33527",
    }
    etymology_languages["MIr."] = etymology_languages["ira-mid"]

    etymology_languages["ira-old"] = {
        canonicalName: "Old Iranian",
        parent: "ira",
        wikidata_item: "Q33527",
    }
    etymology_languages["OIr."] = etymology_languages["ira-old"]

    etymology_languages["kho-old"] = {
        canonicalName: "Old Khotanese",
        parent: "kho",
    }

    etymology_languages["kho-lat"] = {
        canonicalName: "Late Khotanese",
        parent: "kho-old",
    }

    etymology_languages["peo-ear"] = {
        canonicalName: "Early Old Persian",
        parent: "peo",
    }

    etymology_languages["peo-lat"] = {
        canonicalName: "Late Old Persian",
        parent: "peo",
    }

    etymology_languages["pal-ear"] = {
        canonicalName: "Early Middle Persian",
        parent: "pal",
    }

    etymology_languages["pal-lat"] = {
        canonicalName: "Late Middle Persian",
        parent: "pal",
    }

    etymology_languages["ps-nwe"] = {
        canonicalName: "Northwestern Pashto",
        parent: "ps",
    }

    etymology_languages["ps-cgi"] = {
        canonicalName: "Central Ghilzay",
        parent: "ps-nwe",
    }

    etymology_languages["ps-mah"] = {
        canonicalName: "Mahsudi",
        parent: "ps-nwe",
    }

    etymology_languages["ps-nea"] = {
        canonicalName: "Northeastern Pashto",
        parent: "ps",
    }

    etymology_languages["ps-afr"] = {
        canonicalName: "Afridi",
        parent: "ps-nea",
    }

    etymology_languages["ps-bng"] = {
        canonicalName: "Bangash",
        parent: "ps-nea",
    }


    etymology_languages["ps-xat"] = {
        canonicalName: "Khatak",
        parent: "ps-nea",
    }

    etymology_languages["ps-pes"] = {
        canonicalName: "Peshawari",
        parent: "ps-nea",
    }

    etymology_languages["ps-sea"] = {
        canonicalName: "Southeastern Pashto",
        parent: "ps",
    }

    etymology_languages["ps-ban"] = {
        canonicalName: "Bannu",
        parent: "ps-sea",
    }

    etymology_languages["ps-kak"] = {
        canonicalName: "Kakari",
        parent: "ps-sea",
    }

    etymology_languages["ps-ser"] = {
        canonicalName: "Sher",
        parent: "ps-sea",
    }

    etymology_languages["ps-waz"] = {
        canonicalName: "Waziri",
        parent: "ps-sea",
    }

    etymology_languages["ps-swe"] = {
        canonicalName: "Southwestern Pashto",
        parent: "ps",
    }

    etymology_languages["ps-kan"] = {
        canonicalName: "Kandahari",
        parent: "ps-swe",
    }

    etymology_languages["ps-jad"] = {
        canonicalName: "Jadrani",
        parent: "ps",
    }

    etymology_languages["xme-azr"] = {
        canonicalName: "Old Azari",
        aliases : ["Old Azeri", "Azari", "Azeri", "Āḏarī", "Adari", "Adhari"],
        parent: "xme-ott",
    }

    etymology_languages["xme-ttc-cen"] = {
        canonicalName: "Central Tati",
        parent: "xme-ott",
    }

    etymology_languages["xme-ttc-eas"] = {
        canonicalName: "Eastern Tati",
        parent: "xme-ott",
    }

    etymology_languages["xme-ttc-nor"] = {
        canonicalName: "Northern Tati",
        parent: "xme-ott",
    }

    etymology_languages["xme-ttc-sou"] = {
        canonicalName: "Southern Tati",
        parent: "xme-ott",
    }

    etymology_languages["xme-ttc-wes"] = {
        canonicalName: "Western Tati",
        parent: "xme-ott",
    }

    etymology_languages["xmn"] = {
        canonicalName: "Manichaean Middle Persian",
        parent: "pal",
    }

    etymology_languages["fa-ira"] = {
        canonicalName: "Iranian Persian",
        aliases : ["Modern Persian", "Western Persian"],
        parent: "fa",
        wikidata_item: "Q3513637",
    }

    etymology_languages["fa-cls"] = {
        canonicalName: "Classical Persian",
        parent: "fa",
        wikidata_item: "Q9168",
    }

    etymology_languages["prs"] = {
        canonicalName: "Dari",
        aliases : ["Dari Persian", "Central Persian", "Eastern Persian", "Afghan Persian"],
        parent: "fa",
        wikidata_item: "Q178440",
    }

    etymology_languages["os-dig"] = {
        canonicalName: "Digor",
        aliases : ["Digoron"],
        parent: "os",
        wikidata_item: "Q3027861",
    }

    etymology_languages["os-iro"] = {
        canonicalName: "Iron",
        parent: "os",
    }

    etymology_languages["sog-ear"] = {
        canonicalName: "Early Sogdian",
        parent: "sog",
    }

    etymology_languages["sog-lat"] = {
        canonicalName: "Late Sogdian",
        parent: "sog-ear",
    }

    etymology_languages["oru-kan"] = {
        canonicalName: "Kaniguram",
        parent: "oru",
        wikidata_item: "Q6363164",
    }

    etymology_languages["oru-log"] = {
        canonicalName: "Logar",
        parent: "oru",
    }

    etymology_languages["oos-ear"] = {
        canonicalName: "Early Old Ossetic",
        parent: "oos",
    }

    etymology_languages["oos-lat"] = {
        canonicalName: "Late Old Ossetic",
        parent: "oos",
    }

    etymology_languages["xln"] = {
        canonicalName: "Alanic",
        parent: "oos",
    }

    etymology_languages["rdb-rud"] = {
        canonicalName: "Rudbari",
        parent: "rdb",
    }

    etymology_languages["rdb-jir"] = {
        canonicalName: "Jirofti",
        parent: "rdb",
    }

    etymology_languages["rdb-kah"] = {
        canonicalName: "Kahnuji",
        parent: "rdb",
    }

    // Southwestern Fars lects

    etymology_languages["fay-bur"] = {
        canonicalName: "Burenjani",
        parent: "fay",
    }

    etymology_languages["fay-bsh"] = {
        canonicalName: "Bushehri",
        parent: "fay",
    }

    etymology_languages["fay-dsh"] = {
        canonicalName: "Dashtaki",
        parent: "fay",
    }

    etymology_languages["fay-dav"] = {
        canonicalName: "Davani",
        parent: "fay",
        wikidata_item: "Q5228140",
    }

    etymology_languages["fay-eze"] = {
        canonicalName: "Emamzada Esma’ili",
        parent: "fay",
    }

    etymology_languages["fay-gav"] = {
        canonicalName: "Gavkoshaki",
        parent: "fay",
    }

    etymology_languages["fay-kho"] = {
        canonicalName: "Khollari",
        parent: "fay",
    }

    etymology_languages["fay-kon"] = {
        canonicalName: "Kondazi",
        parent: "fay",
    }

    etymology_languages["fay-kzo"] = {
        canonicalName: "Old Kazeruni",
        parent: "fay",
    }

    etymology_languages["fay-mas"] = {
        canonicalName: "Masarami",
        parent: "fay",
    }

    etymology_languages["fay-pap"] = {
        canonicalName: "Papuni",
        parent: "fay",
    }

    etymology_languages["fay-sam"] = {
        canonicalName: "Samghani",
        parent: "fay",
    }

    etymology_languages["fay-shr"] = {
        canonicalName: "Shirazi",
        parent: "fay",
    }

    etymology_languages["fay-sho"] = {
        canonicalName: "Old Shirazi",
        parent: "fay",
    }

    etymology_languages["fay-sam"] = {
        canonicalName: "Samghani",
        parent: "fay",
    }

    etymology_languages["fay-kar"] = {
        canonicalName: "Khargi",
        parent: "fay",
    }

    etymology_languages["fay-sor"] = {
        canonicalName: "Sorkhi",
        parent: "fay",
    }

    // Talysh lects

    etymology_languages["tly-cen"] = {
        canonicalName: "Central Talysh",
        parent: "tly",
    }

    etymology_languages["tly-asa"] = {
        canonicalName: "Asalemi",
        parent: "tly-cen",
    }

    etymology_languages["tly-kar"] = {
        canonicalName: "Karganrudi",
        parent: "tly-cen",
    }

    etymology_languages["tly-tul"] = {
        canonicalName: "Tularudi",
        parent: "tly-cen",
    }

    etymology_languages["tly-tal"] = {
        canonicalName: "Taleshdulabi",
        parent: "tly-cen",
    }

    etymology_languages["tly-nor"] = {
        canonicalName: "Northern Talysh",
        parent: "tly",
    }

    etymology_languages["tly-aze"] = {
        canonicalName: "Azerbaijani Talysh",
        parent: "tly-nor",
    }

    etymology_languages["tly-anb"] = {
        canonicalName: "Anbarani",
        parent: "tly-nor",
    }

    etymology_languages["tly-sou"] = {
        canonicalName: "Southern Talysh",
        parent: "tly",
    }

    etymology_languages["tly-fum"] = {
        canonicalName: "Fumani",
        parent: "tly-sou",
    }

    etymology_languages["tly-msu"] = {
        canonicalName: "Masulei",
        parent: "tly-sou",
    }

    etymology_languages["tly-msa"] = {
        canonicalName: "Masali",
        parent: "tly-sou",
    }

    etymology_languages["tly-san"] = {
        canonicalName: "Shandarmani",
        parent: "tly-sou",
    }

    // Tafreshi lects

    etymology_languages["xme-amo"] = {
        canonicalName: "Amorehi",
        parent: "xme-taf",
    }

    etymology_languages["xme-ast"] = {
        canonicalName: "Ashtiani",
        parent: "xme-taf",
        wikipedia_article: "Ashtiani language",
        wikidata_item: "Q3436590",
    }
    etymology_languages["atn"] = etymology_languages["xme-ast"]

    etymology_languages["xme-bor"] = {
        canonicalName: "Borujerdi",
        parent: "xme-taf",
    }

    etymology_languages["xme-ham"] = {
        canonicalName: "Hamadani",
        parent: "xme-taf",
        wikidata_item: "Q6302426",
    }

    etymology_languages["xme-kah"] = {
        canonicalName: "Kahaki",
        parent: "xme-taf",
    }

    etymology_languages["xme-vaf"] = {
        canonicalName: "Vafsi",
        parent: "xme-taf",
        wikidata_item: "Q32611",
    }
    etymology_languages["vaf"] = etymology_languages["xme-vaf"]

    // Kermanic lects

    etymology_languages["xme-xun"] = {
        canonicalName: "Khunsari",
        parent: "xme-ker",
        wikipedia_article: "Khunsari language",
        wikidata_item: "Q6403030",
    }
    etymology_languages["kfm"] = etymology_languages["xme-xun"]

    etymology_languages["xme-mah"] = {
        canonicalName: "Mahallati",
        parent: "xme-ker",
    }

    etymology_languages["xme-von"] = {
        canonicalName: "Vonishuni",
        parent: "xme-ker",
    }

    etymology_languages["xme-bdr"] = {
        canonicalName: "Badrudi",
        parent: "xme-ker",
    }

    etymology_languages["xme-del"] = {
        canonicalName: "Delijani",
        parent: "xme-ker",
    }

    etymology_languages["xme-kas"] = {
        canonicalName: "Kashani",
        parent: "xme-ker",
    }

    etymology_languages["xme-kes"] = {
        canonicalName: "Kesehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-mey"] = {
        canonicalName: "Meymehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-nat"] = {
        canonicalName: "Natanzi",
        parent: "xme-ker",
        wikipedia_article: "Natanzi language",
        wikidata_item: "Q6968399",
    }
    etymology_languages["ntz"] = etymology_languages["xme-nat"]

    etymology_languages["xme-abz"] = {
        canonicalName: "Abuzeydabadi",
        parent: "xme-ker",
    }

    etymology_languages["xme-aby"] = {
        canonicalName: "Abyanehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-far"] = {
        canonicalName: "Farizandi",
        parent: "xme-ker",
    }

    etymology_languages["xme-jow"] = {
        canonicalName: "Jowshaqani",
        parent: "xme-ker",
    }

    etymology_languages["xme-nas"] = {
        canonicalName: "Nashalji",
        parent: "xme-ker",
    }

    etymology_languages["xme-qoh"] = {
        canonicalName: "Qohrudi",
        parent: "xme-ker",
    }

    etymology_languages["xme-yar"] = {
        canonicalName: "Yarandi",
        parent: "xme-ker",
    }

    etymology_languages["xme-soi"] = {
        canonicalName: "Soi",
        aliases : ["Sohi"],
        parent: "xme-ker",
        wikipedia_article: "Soi language",
        wikidata_item: "Q7930463",
    }
    etymology_languages["soj"] = etymology_languages["xme-soi"]

    etymology_languages["xme-tar"] = {
        canonicalName: "Tari",
        parent: "xme-ker",
    }

    etymology_languages["xme-gaz"] = {
        canonicalName: "Gazi",
        parent: "xme-ker",
        wikipedia_article: "Gazi language",
        wikidata_item: "Q5529130",
    }
    etymology_languages["gzi"] = etymology_languages["xme-gaz"]

    etymology_languages["xme-sed"] = {
        canonicalName: "Sedehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-ard"] = {
        canonicalName: "Ardestani",
        parent: "xme-ker",
    }

    etymology_languages["xme-zef"] = {
        canonicalName: "Zefrehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-isf"] = {
        canonicalName: "Isfahani",
        parent: "xme-ker",
    }

    etymology_languages["xme-kaf"] = {
        canonicalName: "Kafroni",
        parent: "xme-ker",
    }

    etymology_languages["xme-vrz"] = {
        canonicalName: "Varzenehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-xur"] = {
        canonicalName: "Khuri",
        parent: "xme-ker",
    }

    etymology_languages["xme-nay"] = {
        canonicalName: "Nayini",
        parent: "xme-ker",
        wikipedia_article: "Nayini language",
        wikidata_item: "Q6983146",
    }
    etymology_languages["nyq"] = etymology_languages["xme-nay"]

    etymology_languages["xme-ana"] = {
        canonicalName: "Anaraki",
        parent: "xme-ker",
    }

    etymology_languages["xme-dar"] = {
        canonicalName: "Zoroastrian Dari",
        aliases : ["Behdināni", "Gabri", "Gavrŭni", "Gabrōni"],
        parent: "xme-ker",
        wikipedia_article: "Zoroastrian Dari language",
        wikidata_item: "Q32389",
    }
    etymology_languages["gbz"] = etymology_languages["xme-dar"]

    etymology_languages["xme-krm"] = {
        canonicalName: "Kermani",
        parent: "xme-ker",
    }

    etymology_languages["xme-yaz"] = {
        canonicalName: "Yazdi",
        parent: "xme-ker",
    }

    etymology_languages["xme-bid"] = {
        canonicalName: "Bidhandi",
        parent: "xme-ker",
    }

    etymology_languages["xme-bij"] = {
        canonicalName: "Bijagani",
        parent: "xme-ker",
    }

    etymology_languages["xme-cim"] = {
        canonicalName: "Chimehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-han"] = {
        canonicalName: "Hanjani",
        parent: "xme-ker",
    }

    etymology_languages["xme-kom"] = {
        canonicalName: "Komjani",
        parent: "xme-ker",
    }

    etymology_languages["xme-nar"] = {
        canonicalName: "Naraqi",
        parent: "xme-ker",
    }

    etymology_languages["xme-nus"] = {
        canonicalName: "Nushabadi",
        parent: "xme-ker",
    }

    etymology_languages["xme-qal"] = {
        canonicalName: "Qalhari",
        parent: "xme-ker",
    }

    etymology_languages["xme-trh"] = {
        canonicalName: "Tarehi",
        parent: "xme-ker",
    }

    etymology_languages["xme-val"] = {
        canonicalName: "Valujerdi",
        parent: "xme-ker",
    }

    etymology_languages["xme-var"] = {
        canonicalName: "Varani",
        parent: "xme-ker",
    }

    etymology_languages["xme-zor"] = {
        canonicalName: "Zori",
        parent: "xme-ker",
    }

    // Ramandi lects

    etymology_languages["tks-ebr"] = {
        canonicalName: "Ebrahimabadi",
        parent: "tks",
    }

    etymology_languages["tks-sag"] = {
        canonicalName: "Sagzabadi",
        parent: "tks",
    }

    etymology_languages["tks-esf"] = {
        canonicalName: "Esfarvarini",
        parent: "tks",
    }

    etymology_languages["tks-tak"] = {
        canonicalName: "Takestani",
        parent: "tks",
    }

    etymology_languages["tks-cal"] = {
        canonicalName: "Chali",
        parent: "tks",
    }

    etymology_languages["tks-dan"] = {
        canonicalName: "Danesfani",
        parent: "tks",
    }

    etymology_languages["tks-xia"] = {
        canonicalName: "Khiaraji",
        parent: "tks",
    }

    etymology_languages["tks-xoz"] = {
        canonicalName: "Khoznini",
        parent: "tks",
    }

    // Shughni dialects

    etymology_languages["sgh-bro"] = {
        canonicalName: "Bartangi-Oroshori",
        parent: "sgh",
    }

    etymology_languages["sgh-bar"] = {
        canonicalName: "Bartangi",
        parent: "sgh-bro",
    }

    etymology_languages["sgh-oro"] = {
        canonicalName: "Oroshori",
        parent: "sgh-bro",
        aliases : ["Roshorvi"],
    }

    etymology_languages["sgh-rsx"] = {
        canonicalName: "Roshani-Khufi",
        parent: "sgh",
    }

    etymology_languages["sgh-xuf"] = {
        canonicalName: "Khufi",
        parent: "sgh-rsx",
    }

    etymology_languages["sgh-ros"] = {
        canonicalName: "Roshani",
        parent: "sgh-rsx",
    }

    etymology_languages["sgh-xgb"] = {
        canonicalName: "Khughni-Bajui",
        parent: "sgh",
    }

    etymology_languages["sgh-xug"] = {
        canonicalName: "Khughni",
        parent: "sgh-xgb",
    }

    etymology_languages["sgh-baj"] = {
        canonicalName: "Bajui",
        parent: "sgh-xgb",
    }

    // Indo-Aryan varieties

    etymology_languages["inc-mit"] = {
        canonicalName: "Mitanni",
        parent: "inc-pro",
        wikidata_item: "Q1986700",
    }

    etymology_languages["awa-old"] = {
        canonicalName: "Old Awadhi",
        parent: "awa",
    }

    etymology_languages["bra-old"] = {
        canonicalName: "Old Braj",
        parent: "bra",
    }

    etymology_languages["gu-kat"] = {
        canonicalName: "Kathiyawadi",
        aliases : ["Kathiyawadi Gujarati", "Kathiawadi"],
        parent: "gu",
    }

    etymology_languages["gu-lda"] = {
        canonicalName: "Lisan ud-Dawat Gujarati",
        aliases : ["Lisan ud-Dawat", "LDA"],
        parent: "gu",
    }

    etymology_languages["hi-mum"] = {
        canonicalName: "Bombay Hindi",
        aliases : ["Mumbai Hindi", "Bambaiyya Hindi"],
        parent: "hi",
        wikidata_item: "Q3543151",
    }

    etymology_languages["hi-mid"] = {
        canonicalName: "Middle Hindi",
        parent: "hi",
    }

    etymology_languages["pa-old"] = {
        canonicalName: "Old Punjabi",
        parent: "pa",
    }

    etymology_languages["sa-bhs"] = {
        canonicalName: "Buddhist Hybrid Sanskrit",
        parent: "sa",
        wikidata_item: "Q248758",
    }

    etymology_languages["sa-bra"] = {
        canonicalName: "Brahmanic Sanskrit",
        parent: "sa",
        wikidata_item: "Q36858",
    }

    etymology_languages["sa-cls"] = {
        canonicalName: "Classical Sanskrit",
        parent: "sa",
        wikidata_item: "Q11059",
    }

    etymology_languages["sa-neo"] = {
        canonicalName: "New Sanskrit",
        parent: "sa",
        wikidata_item: "Q11059",
    }

    etymology_languages["sa-ved"] = {
        canonicalName: "Vedic Sanskrit",
        parent: "sa",
        wikidata_item: "Q36858",
    }

    etymology_languages["si-med"] = {
        canonicalName: "Medieval Sinhalese",
        aliases : ["Medieval Sinhala"],
        parent: "si",
    }

    etymology_languages["kok-mid"] = {
        canonicalName: "Middle Konkani",
        aliases : ["Medieval Konkani"],
        parent: "kok",
    }

    etymology_languages["kok-old"] = {
        canonicalName: "Old Konkani",
        aliases : ["Early Konkani"],
        parent: "kok",
    }


    // Indian subcontinent languages


    // Dhivehi varieties

    etymology_languages["mlk-dv"] = {
        canonicalName: "Mulaku Dhivehi",
        aliases : ["Mulaku Divehi", "Mulaku Bas"],
        parent: "dv",
    }

    etymology_languages["hvd-dv"] = {
        canonicalName: "Huvadhu Dhivehi",
        aliases : ["Huvadhu Divehi", "Huvadhu Bas"],
        parent: "dv",
    }

    etymology_languages["add-dv"] = {
        canonicalName: "Addu Dhivehi",
        aliases : ["Addu Divehi", "Addu Bas"],
        parent: "dv",
    }

    // Dravidian varieties

    etymology_languages["ta-mid"] = {
        canonicalName: "Middle Tamil",
        parent: "ta",
        wikidata_item: "Q20987434",
    }

    // Prakrits

    etymology_languages["prk-avt"] = {
        canonicalName: "Avanti",
        aliases : ["Avanti Prakrit"],
        parent: "sa",
    }

    etymology_languages["prc-prk"] = {
        canonicalName: "Pracya",
        aliases : ["Pracya Prakrit"],
        parent: "sa",
    }

    etymology_languages["bhl-prk"] = {
        canonicalName: "Bahliki",
        aliases : ["Bahliki Prakrit"],
        parent: "sa",
    }

    etymology_languages["dks-prk"] = {
        canonicalName: "Daksinatya",
        aliases : ["Daksinatya Prakrit"],
        parent: "sa",
    }

    etymology_languages["skr-prk"] = {
        canonicalName: "Sakari",
        aliases : ["Sakari Prakrit"],
        parent: "sa",
    }

    etymology_languages["cnd-prk"] = {
        canonicalName: "Candali",
        aliases : ["Candali Prakrit"],
        parent: "sa",
    }

    etymology_languages["sbr-prk"] = {
        canonicalName: "Sabari",
        aliases : ["Sabari Prakrit"],
        parent: "sa",
    }

    etymology_languages["abh-prk"] = {
        canonicalName: "Abhiri",
        aliases : ["Abhiri Prakrit"],
        parent: "sa",
    }

    etymology_languages["drm-prk"] = {
        canonicalName: "Dramili",
        aliases : ["Dramili Prakrit"],
        parent: "sa",
    }

    etymology_languages["odr-prk"] = {
        canonicalName: "Odri",
        aliases : ["Odri Prakrit"],
        parent: "sa",
    }


    // Italian, Latin and other Italic varieties

    etymology_languages["it-oit"] = {
        canonicalName: "Old Italian",
        parent: "it",
        wikidata_item: "Q652",
    }
    etymology_languages["roa-oit"] = etymology_languages["it-oit"]

    etymology_languages["it-CH"] = {
        canonicalName: "Switzerland Italian",
        parent: "it",
        wikidata_item: "Q672147",	
    }
    etymology_languages["Swiss Italian"] = etymology_languages["it-CH"]
    etymology_languages["Switzerland Italian"] = etymology_languages["it-CH"]

    // Latin varieties by period

    etymology_languages["la-lat"] = {
        canonicalName: "Late Latin",
        parent: "la",
        wikidata_item: "Q1503113",
    }
    etymology_languages["Late Latin"] = etymology_languages["la-lat"]
    etymology_languages["LL."] = etymology_languages["la-lat"]
    etymology_languages["LL"] = etymology_languages["la-lat"]

    etymology_languages["la-vul"] = {
        canonicalName: "Vulgar Latin",
        parent: "la",
        wikidata_item: "Q37560",
    }
    etymology_languages["Vulgar Latin"] = etymology_languages["la-vul"]
    etymology_languages["VL."] = etymology_languages["la-vul"]

    etymology_languages["la-med"] = {
        canonicalName: "Medieval Latin",
        parent: "la",
        wikidata_item: "Q1163234",
    }
    etymology_languages["Medieval Latin"] = etymology_languages["la-med"]
    etymology_languages["ML."] = etymology_languages["la-med"]
    etymology_languages["ML"] = etymology_languages["la-med"]

    etymology_languages["la-ecc"] = {
        canonicalName: "Ecclesiastical Latin",
        aliases : ["Church Latin"],
        parent: "la",
        wikidata_item: "Q1247932",
    }
    etymology_languages["Ecclesiastical Latin"] = etymology_languages["la-ecc"]
    etymology_languages["EL."] = etymology_languages["la-ecc"]

    etymology_languages["la-ren"] = {
        canonicalName: "Renaissance Latin",
        parent: "la",
        wikidata_item: "Q499083",
    }
    etymology_languages["Renaissance Latin"] = etymology_languages["la-ren"]
    etymology_languages["RL."] = etymology_languages["la-ren"]

    etymology_languages["la-new"] = {
        canonicalName: "New Latin",
        aliases : ["Modern Latin"],
        parent: "la",
        wikidata_item: "Q1248221",
    }
    etymology_languages["New Latin"] = etymology_languages["la-new"]
    etymology_languages["NL."] = etymology_languages["la-new"]

    // other Italic lects

    etymology_languages["osc-luc"] = {
        canonicalName: "Lucanian",
        parent: "osc",
    }

    etymology_languages["osc-sam"] = {
        canonicalName: "Samnite",
        parent: "osc",
    }

    etymology_languages["xum-her"] = {
        canonicalName: "Hernician",
        parent: "xum",
    }


    // Malay and related varieties

    etymology_languages["ms-old"] = {
        canonicalName: "Old Malay",
        parent: "ms",
    }

    etymology_languages["ms-cla"] = {
        canonicalName: "Classical Malay",
        parent: "ms",
    }

    etymology_languages["pse-bsm"] = {
        canonicalName: "Besemah",
        parent: "pse",
    }

    etymology_languages["bew-kot"] = {
        canonicalName: "Betawi Kota",
        parent: "bew",
    }

    etymology_languages["bew-ora"] = {
        canonicalName: "Betawi Ora",
        parent: "bew",
    }

    etymology_languages["bew-udi"] = {
        canonicalName: "Betawi Udik",
        parent: "bew",
    }


    // Mongolic lects

    etymology_languages["xng-ear"] = {
        canonicalName: "Early Middle Mongolian",
        parent: "xng",
    }

    etymology_languages["xng-lat"] = {
        canonicalName: "Late Middle Mongolian",
        parent: "xng",
    }

    etymology_languages["mn-kha"] = {
        canonicalName: "Khalkha Mongolian",
        aliases : ["Khalkha"],
        parent: "mn",
        wikidata_item: "Q6399808",
    }

    etymology_languages["mn-ord"] = {
        canonicalName: "Ordos Mongolian",
        aliases : ["Ordos"],
        parent: "mn",
        wikidata_item: "Q716904",
    }

    etymology_languages["mn-cha"] = {
        canonicalName: "Chakhar Mongolian",
        aliases : ["Chakhar"],
        parent: "mn",
        wikidata_item: "Q907425",
    }

    etymology_languages["mn-khr"] = {
        canonicalName: "Khorchin Mongolian",
        aliases : ["Khorchin"],
        parent: "mn",
        wikidata_item: "Q3196210",
    }

    etymology_languages["mjg-huz"] = {
        canonicalName: "Mongghul",
        aliases : ["Huzhu Monguor"],
        parent: "mjg",
        wikidata_item: "Q34214",
    }

    etymology_languages["mjg-min"] = {
        canonicalName: "Mangghuer",
        aliases : ["Minhe Monguor"],
        parent: "mjg",
        wikidata_item: "Q34214",
    }

    // Japanese varieties

    etymology_languages["ja-mid"] = {
        canonicalName: "Middle Japanese",
        parent: "ojp",
        wikidata_item: "Q6841474",
    }

    etymology_languages["ja-mid-ear"] = {
        canonicalName: "Early Middle Japanese",
        parent: "ja-mid",
        wikidata_item: "Q182695",
    }

    etymology_languages["ja-mid-lat"] = {
        canonicalName: "Late Middle Japanese",
        parent: "ja-mid",
        wikidata_item: "Q1816184",
    }

    etymology_languages["ja-ear"] = {
        canonicalName: "Early Modern Japanese",
        parent: "ja",
        wikidata_item: "Q5326692",
    }

    // Kartvelian varieties


    etymology_languages["ka-mid"] = {
        canonicalName: "Middle Georgian",
        parent: "ka",
    }

    // Korean varieties

    etymology_languages["ko-ear"] = {
        canonicalName: "Early Modern Korean",
        parent: "ko",
        wikidata_item: "Q756014",
    }

    etymology_languages["okm-ear"] = {
        canonicalName: "Early Middle Korean",
        parent: "okm",
    }

    etymology_languages["oko-lat"] = {
        canonicalName: "Late Old Korean",
        parent: "oko",
    }

    // Occitan varieties

    etymology_languages["oc-auv"] = {
        canonicalName: "Auvergnat",
        aliases : ["Auvernhat", "Auvergnese"],
        parent: "oc",
        wikidata_item: "Q35359",
    }

    etymology_languages["oc-gas"] = {
        canonicalName: "Gascon",
        parent: "oc",
        wikidata_item: "Q35735",
    }

    // standardized dialect of Gascon
    etymology_languages["oc-ara"] = {
        canonicalName: "Aranese",
        parent: "oc-gas",
        wikidata_item: "Q10196",
    }

    etymology_languages["oc-lan"] = {
        canonicalName: "Languedocien",
        aliases : ["Lengadocian"],
        parent: "oc",
        wikidata_item: "Q942602",
    }

    etymology_languages["oc-lim"] = {
        canonicalName: "Limousin",
        parent: "oc",
        wikidata_item: "Q427614",
    }

    etymology_languages["oc-pro"] = {
        canonicalName: "Provençal",
        aliases : ["Provencal"],
        parent: "oc",
        wikidata_item: "Q241243",
    }

    etymology_languages["prv"] = etymology_languages["oc-pro"]

    etymology_languages["oc-viv"] = {
        canonicalName: "Vivaro-Alpine",
        parent: "oc",
        wikidata_item: "Q1649613",
    }

    etymology_languages["oc-jud"] = {
        canonicalName: "Shuadit",
        aliases : [
            "Chouhadite", "Chouhadit", "Chouadite", "Chouadit", "Shuhadit",
            "Judeo-Occitan", "Judæo-Occitan", "Judaeo-Occitan",
            "Judeo-Provençal", "Judæo-Provençal", "Judaeo-Provençal",
            "Judeo-Provencal", "Judaeo-Provencal",
            "Judeo-Comtadin", "Judæo-Comtadin", "Judaeo-Comtadin",
        ],
        parent: "oc",
        wikidata_item: "Q56472",
    }

    // Phillipine varieties

    etymology_languages["tl-old"] = {
        canonicalName: "Old Tagalog",
        parent: "tl",
        wikidata_item: "Q12967437",
    }

    etymology_languages["tl-cls"] = {
        canonicalName: "Classical Tagalog",
        parent: "tl",
    }


    // Pre-Roman substrates

    etymology_languages["qfa-sub-ibe"] = {
        canonicalName: "a pre-Roman substrate of Iberia",
        parent: "qfa-sub",
        wikidata_item: "Q530799",
    }

    etymology_languages["qfa-sub-bal"] = {
        canonicalName: "a pre-Roman substrate of the Balkans",
        parent: "qfa-sub",
    }

    // Sardinian varieties

    etymology_languages["sc-src"] = {
        canonicalName: "Logudorese",
        aliases : ["Logudorese Sardinian"],
        parent: "sc",
        wikidata_item: "Q777974",
    }

    etymology_languages["sc-nuo"] = {
        canonicalName: "Nuorese",
        aliases : ["Nuorese Sardinian"],
        parent: "sc-src",
    }

    etymology_languages["sc-sro"] = {
        canonicalName: "Campidanese",
        aliases : ["Campidanese Sardinian"],
        parent: "sc",
        wikidata_item: "Q35348",
    }

    // Rwanda-Rundi varieties

    etymology_languages["rw-kin"] = {
        canonicalName: "Kinyarwanda",
        aliases : ["Rwanda"],
        parent: "rw",
        wikidata_item: "Q33573",
    }

    etymology_languages["rw-run"] = {
        canonicalName: "Kirundi",
        aliases : ["Rundi"],
        parent: "rw",
        wikidata_item: "Q33583",
    }

    // Slavic varieties

    etymology_languages["cs-ear"] = {
        canonicalName: "Early Modern Czech",
        parent: "cs",
    }

    etymology_languages["zle-oru"] = {
        canonicalName: "Old Russian",
        parent: "orv",
        wikidata_item: "Q35228",
    }

    etymology_languages["zle-obe"] = {
        canonicalName: "Old Belarusian",
        parent: "orv",
        wikidata_item: "Q13211",
    }

    etymology_languages["zle-ouk"] = {
        canonicalName: "Old Ukrainian",
        parent: "orv",
        wikidata_item: "Q13211",
    }

    // Serbo-Croatian varieties

    etymology_languages["sh-cha"] = {
        canonicalName: "Chakavian Serbo-Croatian",
        aliases : ["Čakavian"],
        parent: "sh",
        wikidata_item: "Q337565",
    }
    etymology_languages["ckm"] = etymology_languages["sh-cha"] // ISO 639-3 code

    etymology_languages["sh-kaj"] = {
        canonicalName: "Kajkavian Serbo-Croatian",
        parent: "sh",
        wikidata_item: "Q838165",
    }
    etymology_languages["kjv"] = etymology_languages["sh-kaj"] // ISO 639-3 code

    etymology_languages["sh-tor"] = { // Linguist code srp-tor
        canonicalName: "Torlakian Serbo-Croatian",
        aliases : ["Torlak"],
        parent: "sh",
        wikidata_item: "Q1078803",
    }

    // Turkic lects

    etymology_languages["trk-cmn"] = {
        canonicalName: "Common Turkic",
        parent: "trk-pro",
        wikidata_item: "Q1126028",
    }

    etymology_languages["trk-ogz-pro"] = {
        canonicalName: "Proto-Oghuz",
        aliases : ["Southwestern Common Turkic"],
        parent: "trk-pro",
        ancestors : ["trk-pro"],
        wikidata_item: "Q494600",
    }

    etymology_languages["otk-kir"] = {
        canonicalName: "Old Kirghiz",
        parent: "otk",
        wikidata_item: "Q83142",
    }

    etymology_languages["klj-arg"] = {
        canonicalName: "Arghu",
        parent: "klj",
        wikidata_item: "Q33455",
    }

    etymology_languages["qwm-arm"] = {
        canonicalName: "Armeno-Kipchak",
        parent: "qwm",
        wikidata_item: "Q2027503",
    }

    etymology_languages["qwm-mam"] = {
        canonicalName: "Mamluk-Kipchak",
        parent: "qwm",
        wikidata_item: "Q4279942",
    }

    etymology_languages["az-cls"] = {
        canonicalName: "Classical Azerbaijani",
        aliases : ["Classical Azeri"],
        parent: "az",
    }

    // Other lects

    etymology_languages["alv-kro"] = {
        canonicalName: "Kromanti",
        parent: "crp",
        wikidata_item: "Q1093206",
    }

    etymology_languages["bat-pro"] = {
        canonicalName: "Proto-Baltic",
        parent: "ine-bsl-pro",
        wikidata_item: "Q1703347",
    }

    etymology_languages["es-lun"] = {
        canonicalName: "Lunfardo",
        parent: "es",
        wikidata_item: "Q1401612",
    }
    etymology_languages["Lunfardo"] = etymology_languages["es-lun"]

    etymology_languages["fiu-pro"] = {
        canonicalName: "Proto-Finno-Ugric",
        parent: "urj-pro",
        wikidata_item: "Q79890",
    }

    etymology_languages["gem-sue"] = {
        canonicalName: "Suevic",
        aliases : ["Suebian"],
        parent: "gmw",
        wikidata_item: "Q155085",
    }

    etymology_languages["mkh-okm-A"] = {
        canonicalName: "Angkorian Old Khmer",
        parent: "mkh-okm",
        wikipedia_article: "Khmer language#Historical periods",
        wikidata_item: "Q9205",
    }

    etymology_languages["mkh-okm-P"] = {
        canonicalName: "Pre-Angkorian Old Khmer",
        parent: "mkh-okm",
        wikipedia_article: "Khmer language#Historical periods",
        wikidata_item: "Q9205",
    }

    etymology_languages["mul-tax"] = {
        canonicalName: "taxonomic name",
        parent: "mul",
    }
    etymology_languages["Tax."] = etymology_languages["mul-tax"]

    etymology_languages["qfa-pyg"] = {
        canonicalName: "a substrate language originally spoken by the Pygmies",
        parent: "qfa-sub",
        wikipedia_article: "Classification of Pygmy languages#Original Pygmy language(s)",
    }
    etymology_languages["pygmy"] = etymology_languages["qfa-pyg"]

    etymology_languages["tai-shz"] = {
        canonicalName: "Shangsi Zhuang",
        parent: "za",
        wikidata_item: "Q13216",
    }

    etymology_languages["tbq-pro"] = {
        canonicalName: "Proto-Tibeto-Burman",
        parent: "sit-pro",
        wikidata_item: "Q7251864",
    }

    etymology_languages["und-idn"] = {
        canonicalName: "Idiom Neutral",
        parent: "und", // or "vo"
        wikipedia_article: "Idiom Neutral",
        wikidata_item: "Q35847",
    }

    etymology_languages["und-tdl"] = {
        canonicalName: "Turduli",
        parent: "und",
        wikipedia_article: "Turduli",
    }

    etymology_languages["und-tdt"] = {
        canonicalName: "Turdetani",
        parent: "und",
        wikipedia_article: "Turdetani",
    }

    etymology_languages["und-xbi"] = {
        canonicalName: "Xianbei",
        parent: "und",
        wikipedia_article: "Xianbei",
    }

    etymology_languages["und-xnu"] = {
        canonicalName: "Xiongnu",
        parent: "und",
        wikipedia_article: "Xiongnu",
    }

    etymology_languages["urj-fpr-pro"] = {
        canonicalName: "Proto-Finno-Permic",
        parent: "urj-pro",
    }

    etymology_languages["woy"] = {
        canonicalName: "Weyto",
        parent: "und",
        wikidata_item: "Q3915918",
    }
    return etymology_languages
}