/* TESTI DELLA PRESENTAZIONE
   Tutte le parole che compaiono sulla pagina stanno in questo file.
   Per correggere un testo si cambia quello che sta fra le virgolette, a destra dei due punti.
   I nomi a sinistra dei due punti non si toccano: servono alla pagina per trovare il testo.
   Non togliere virgolette, virgole e parentesi. Dentro un testo, al posto delle virgolette dritte, usare « ».
   <b>parola</b> evidenzia una parola.
   Il modo più comodo: aprire la pagina aggiungendo ?modifica in fondo all'indirizzo, correggere i testi
   direttamente sulla pagina e scaricare questo file già aggiornato. */
const TESTI = {
  "pagina": {
    "titolo": "TPER, i dati come asset affidabile",
    "sottotitolo": "Data governance, area vendite",
    "indice": "indice",
    "piede": [
      "Le schermate vengono dall'ambiente di collaudo della piattaforma dati. I nomi delle persone sono oscurati.",
      "TPER · Progetto di data governance · novembre 2026"
    ]
  },
  "apertura": {
    "prima": "Come facciamo dei nostri dati un",
    "cerchiata": "asset affidabile",
    "dopo": ", su cui basare le decisioni?",
    "testo": "È la prima priorità della Strategia ICT 2026-2028 di TPER. Il progetto di data governance sull'<b>area vendite</b> è la prima risposta completa: l'abbiamo scomposta in <b>otto domande</b>. Ognuna ha una risposta, qualcuno che ne risponde e prove da aprire a tutta pagina.",
    "pulsante": "Segui la strada",
    "inizio": "comincia da qui",
    "lungo": "due domande accompagnano il dato per tutta la strada",
    "scendi": "da qui, fermata per fermata",
    "capolinea": "Capolinea",
    "capolinea_glossa": "che cosa sappiamo oggi"
  },
  "capitoli": {
    "partenza": {
      "titolo": "Il punto di partenza",
      "testo": "Prima di costruire qualcosa bisogna sapere dove si vuole andare e che cosa si ha in mano. Sono le prime due fermate."
    },
    "percorso": {
      "titolo": "Il percorso: sette linee, una in fondo",
      "testo": "La Strategia ha mappato sette domini informativi. Ognuno è una linea con quattro fermate di conoscenza. Vendite l'ha percorsa fin quasi in fondo; Manutenzione è alla seconda. Le altre sono già disegnate: aspettano lo stesso viaggio."
    },
    "flusso": {
      "titolo": "Il flusso: dove nascono le risposte",
      "testo": "Sulla linea Vendite il dato fa cinque tappe: sorgenti, bronze, silver, gold, report. Alla partenza è nella nebbia: esiste, ma nessuno sa dire con certezza che cosa contiene. Poi, tappa dopo tappa, una domanda trova risposta dentro il flusso, non in un documento a parte."
    },
    "lungo": {
      "titolo": "Lungo tutta la strada",
      "testo": "Due domande non hanno una tappa: accompagnano il dato per tutto il viaggio, da quando entra in bronze a quando arriva nel report."
    },
    "chi": {
      "titolo": "Chi risponde di che cosa",
      "testo": "Ogni domanda ha una funzione che la presidia. Qui compaiono le funzioni e non i nomi: le attribuzioni della Policy di data governance sono in fase di validazione.",
      "didascalia": "Quale funzione presidia ciascuna delle otto domande"
    }
  },
  "percorso": {
    "gradini": [
      "Inventariato",
      "Analizzato con i referenti",
      "Implementato sulla piattaforma",
      "Reportistica rifatta"
    ],
    "gradini_brevi": [
      "inventariato",
      "analizzato",
      "sulla piattaforma",
      "nei report"
    ],
    "domini": [
      {
        "nome": "Vendite / Commerciale / Call Center",
        "gradino": 3,
        "in_corso": true
      },
      {
        "nome": "Manutenzione / Impianti / Sosta",
        "gradino": 2
      },
      {
        "nome": "Esercizio",
        "gradino": 1
      },
      {
        "nome": "Amministrazione",
        "gradino": 1
      },
      {
        "nome": "Direzione / Staff",
        "gradino": 1
      },
      {
        "nome": "HR",
        "gradino": 1
      },
      {
        "nome": "Servizi di integrazione",
        "gradino": 1
      }
    ],
    "siamo_qui": "siamo qui",
    "in_corso": "report commerciale, in corso",
    "legenda": [
      "tratto percorso",
      "in corso",
      "da percorrere"
    ]
  },
  "funzioni": {
    "ne_risponde": "ne risponde",
    "ne_rispondono": "ne rispondono",
    "cdm": {
      "nome": "Comitato guida Data Move",
      "compito": "presidia la Strategia e ne segue gli indicatori"
    },
    "bdo": {
      "nome": "Business Data Owner",
      "compito": "risponde del significato del dato, uno per dominio"
    },
    "dto": {
      "nome": "Data Technology Owner",
      "compito": "risponde della piattaforma e delle pipeline"
    },
    "dgl": {
      "nome": "Data Governance Lead",
      "compito": "presidia regole, catalogo e glossario su tutti i domini"
    }
  },
  "documenti": {
    "strategia": {
      "titolo": "Strategia ICT ed Evoluzione Data-Driven 2026-2028",
      "file": "20260302_TPER_Strategia_ICT_2026-2028.docx"
    },
    "vendite": {
      "titolo": "Analisi del dominio vendite, giugno 2026",
      "file": "20260618_TPER_Analisi_dominio_vendite.pdf"
    },
    "manutenzione": {
      "titolo": "Sintesi dell'analisi del dominio manutenzione, luglio 2026",
      "file": "20260630_TPER_Sintesi_Analisi_dominio_Manutenzione.pptx"
    },
    "policy": {
      "titolo": "Policy di Data Governance v3, ottobre 2026",
      "file": "20261014_TPER_POLICY_DGV3.pptx"
    },
    "catalogo": {
      "titolo": "Data Catalog ufficiale: metadati delle tabelle",
      "file": "TPER_Data_Catalog_UFFICIALE_METADATI_TABELLE.xlsx"
    },
    "agosto": {
      "titolo": "Stato del progetto di data governance, agosto 2026",
      "file": "20260804_TPER_PROGETTO_DATA_GOVERNANCE_U.pdf"
    },
    "categorie": {
      "titolo": "Proposta di categorizzazione dei titoli di viaggio: 224 codici"
    },
    "controllo": {
      "titolo": "Il controllo dei dati dal bronze al silver, spiegato a chi non è tecnico (bozza, novembre 2026)"
    },
    "motore": {
      "titolo": "Note di implementazione del motore di controllo (novembre 2026)"
    }
  },
  "fermate": [
    {
      "luogo": "La direzione",
      "glossa": "lo chiede la Strategia ICT",
      "etichetta": "Dove andiamo",
      "breve": "Dove vogliamo andare?",
      "domanda": "Dove vogliamo andare, con i dati, nei prossimi tre anni?",
      "risposta": "La Strategia ICT 2026-2028 lo ha scritto: una funzione di data governance, sei priorità, diciassette indicatori e un comitato che li segue ogni trimestre.",
      "spiegazione": [
        "La Strategia, di marzo 2026, mette al primo posto la capacità decisionale: <b>trasformare i dati in un vero asset strategico</b>. Per farlo istituisce la funzione di data governance e ne descrive l'organizzazione.",
        "Quattro dei diciassette indicatori aspettano proprio questo progetto: accessi alle dashboard, dati aggiornati entro i tempi, controlli di qualità attivi, report prodotti in automatico. Il comitato guida, in co-leadership con le Risorse Umane, ne presidia l'attuazione."
      ],
      "nota": "sei priorità, la prima è questa",
      "funzioni": [
        "cdm"
      ],
      "documenti": [
        "strategia"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Le sei priorità e i diciassette indicatori",
          "testo": [
            "La Strategia elenca sei priorità. La prima è decidere meglio, con dati affidabili: è quella a cui risponde questo progetto.",
            "Diciassette indicatori misurano l'avanzamento, e il comitato guida li rivede ogni trimestre. I quattro in rosso dipendono dal lavoro fatto sull'area vendite."
          ]
        },
        {
          "tipo": "citazione",
          "titolo": "Le sei priorità, con le parole della Strategia",
          "testo": [
            "Sono i titoli delle sei priorità, così come li scrive il documento di marzo 2026."
          ],
          "citazione": "Accrescere la capacità decisionale, competitività e responsività. Garantire la continuità del servizio. Efficientare processi operativi e manutentivi oltre che di reportistica. Promuovere una cultura interna. Ridurre la proliferazione e disseminazione degli applicativi. Garantire la conformità normativa.",
          "fonte": "Titoli del paragrafo 2.2 della Strategia ICT ed Evoluzione Data-Driven 2026-2028"
        }
      ]
    },
    {
      "luogo": "Sorgenti",
      "glossa": "i sistemi, ancora nella nebbia",
      "etichetta": "Che cosa abbiamo",
      "breve": "Che cosa abbiamo?",
      "domanda": "Che cosa abbiamo, in sistemi e in dati, e chi ci lavora ogni giorno?",
      "risposta": "Sette domini informativi mappati nella Strategia; due di questi, vendite e manutenzione, analizzati a fondo insieme alle persone che li usano.",
      "spiegazione": [
        "Per le vendite: bigliettazione, portale clienti, sanzioni, sharing, contabilità; e quattro dati essenziali, cioè titolo di viaggio, verbale, servizio di sharing, cliente. Per la manutenzione: un sistema centrale collegato a una ventina di altri e oltre quaranta dashboard già esistenti.",
        "Sulla piattaforma dati oggi arrivano <b>sei sistemi sorgente</b> dell'area vendite, ciascuno nel proprio spazio di arrivo."
      ],
      "nota": "uno spazio per ogni sistema",
      "funzioni": [
        "dgl",
        "bdo"
      ],
      "documenti": [
        "vendite",
        "manutenzione"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Sette domini, sei sistemi in arrivo",
          "testo": [
            "A sinistra i sette domini informativi della Strategia e il punto a cui è arrivato ciascuno. Vendite è il primo ad avere i dati sulla piattaforma.",
            "A destra i sei sistemi dell'area vendite che oggi consegnano i loro dati. Ognuno ha il proprio spazio di arrivo: in grigio il nome che porta sulla piattaforma."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "catalogo-albero.jpg",
          "titolo": "L'albero del catalogo, com'è",
          "testo": [
            "L'albero del catalogo sulla piattaforma. Nel giro rosso, gli spazi di arrivo dei dati grezzi: uno per sistema sorgente."
          ],
          "alt": "Albero del catalogo con gli spazi di arrivo dei dati",
          "evidenzia": [
            8.2,
            15.8,
            90.2,
            25.4
          ]
        }
      ]
    },
    {
      "luogo": "Bronze",
      "glossa": "il magazzino degli arrivi",
      "etichetta": "Dove sono i dati",
      "breve": "Dove sono i dati, e che cosa dicono?",
      "domanda": "Dove sono i nostri dati, e che cosa vuol dire ogni tabella?",
      "risposta": "In un catalogo unico sulla piattaforma: ogni tabella e ogni colonna hanno una descrizione in italiano e quattro etichette di governo.",
      "spiegazione": [
        "Il catalogo non è un documento a parte: è la piattaforma stessa dove il dato passa. <b>21 tabelle e 1.355 colonne</b> dell'area vendite sono descritte in linguaggio di business.",
        "Ogni tabella porta quattro etichette: stato di certificazione, criticità per la sicurezza, sensibilità, presenza di dati personali. Chi cerca una tabella trova subito che cosa contiene, chi ne risponde e come va trattata."
      ],
      "nota": "21 tabelle, 1.355 colonne descritte così",
      "funzioni": [
        "bdo",
        "dto"
      ],
      "documenti": [
        "catalogo",
        "policy"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "La scheda di una tabella",
          "testo": [
            "È la scheda della tabella delle vendite della bigliettazione, riscritta con parole nostre. A sinistra la descrizione in italiano e le quattro etichette di governo; a destra il significato di ogni colonna.",
            "Tutte le 21 tabelle dell'area vendite hanno una scheda così, per 1.355 colonne in tutto."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "tabella-vendite.jpg",
          "titolo": "La stessa scheda sulla piattaforma",
          "testo": [
            "La tabella delle vendite della bigliettazione, com'è su Databricks. Nel giro rosso la descrizione in italiano; sotto, colonna per colonna, il significato e le etichette."
          ],
          "alt": "Scheda della tabella delle vendite con descrizione e colonne",
          "evidenzia": [
            2,
            17.2,
            96.1,
            29.2
          ]
        }
      ]
    },
    {
      "luogo": "Silver",
      "glossa": "il cancello dei controlli",
      "etichetta": "Le nostre categorie",
      "breve": "Categorie nostre, o dei sistemi?",
      "domanda": "I filtri dei report usano le nostre categorie, o quelle dei sistemi?",
      "risposta": "Le nostre. I codici dei sistemi sono raggruppati in categorie leggibili, caricate come tabelle di riferimento dentro il flusso.",
      "spiegazione": [
        "I sistemi parlano in codici. Con i referenti IT, e poi con il commerciale, <b>224 codici di titolo</b> sono stati raggruppati in categorie che hanno senso per chi legge un report: corsa semplice con carta, con biglietto, borsellino elettronico, abbonamento.",
        "Non vivono in un foglio Excel. Ognuna delle <b>2.468 coppie</b> codice-descrizione nasce come proposta; il flusso usa solo quelle approvate dal proprietario del dato."
      ],
      "nota": "nasce proposta, vale se approvata",
      "funzioni": [
        "bdo",
        "dgl"
      ],
      "documenti": [
        "categorie"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Dai codici alle categorie",
          "testo": [
            "A sinistra sette codici veri, come arrivano dal sistema di bigliettazione. A destra le cinque categorie in cui li legge chi apre un report.",
            "Ogni abbinamento nasce come proposta e vale solo dopo l'approvazione del proprietario del dato."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "reference.jpg",
          "titolo": "La tabella dei codici sulla piattaforma",
          "testo": [
            "La tabella di riferimento dei codici. Nel giro rosso la descrizione; sotto, il codice così come arriva dalla sorgente."
          ],
          "alt": "Scheda della tabella di riferimento dei codici",
          "evidenzia": [
            2,
            17.2,
            96.1,
            13.8
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "reference-schema.jpg",
          "titolo": "Le tre tabelle di riferimento",
          "testo": [
            "Le tre tabelle di riferimento, nel giro rosso: struttura attesa, famiglie dei titoli, codici."
          ],
          "alt": "Elenco delle tre tabelle di riferimento",
          "evidenzia": [
            2.8,
            76.2,
            25.1,
            21.4
          ]
        }
      ]
    },
    {
      "luogo": "Gold",
      "glossa": "la sala dei numeri",
      "etichetta": "Un numero per decidere",
      "breve": "Da dove viene un numero per decidere?",
      "domanda": "Quando serve un numero per decidere, da dove lo prendiamo, e possiamo fidarci?",
      "risposta": "Dall'ultimo strato della piattaforma. Il dato arriva grezzo, viene controllato, poi consolidato per i report; e di ogni numero si può risalire all'origine.",
      "spiegazione": [
        "Tre strati, tre garanzie. In <b>bronze</b> il dato è com'è arrivato, intoccato. In <b>silver</b> entra solo ciò che ha superato i controlli. In <b>gold</b> è nella forma che serve a chi decide: le vendite per giorno, canale, titolo e azienda.",
        "La piattaforma traccia in automatico da quali tabelle proviene ogni numero. Oggi tutta la catena è costruita e collaudata sulle vendite e sulle validazioni di TPER e del Marconi Express."
      ],
      "nota": "da dove viene ogni numero",
      "manca": "da rifare: la schermata della tracciabilità, a uno zoom che si legga",
      "funzioni": [
        "dto"
      ],
      "documenti": [
        "controllo"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Da dove viene un numero",
          "testo": [
            "La tabella delle vendite del livello gold nasce da due tabelle già controllate e da due anagrafiche. Da lì parte il report commerciale, che è in corso.",
            "Sotto, i tre livelli in ordine: il dato com'è arrivato, il dato controllato, il dato pronto per decidere."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "lineage.jpg",
          "titolo": "La tracciabilità sulla piattaforma",
          "testo": [
            "La tracciabilità della tabella delle vendite, nel giro rosso: a sinistra le tabelle controllate da cui nasce."
          ],
          "alt": "Grafo della tracciabilità della tabella delle vendite",
          "evidenzia": [
            40.4,
            20.2,
            19.7,
            38.7
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "gold-schema.jpg",
          "titolo": "Le tabelle del livello gold",
          "testo": [
            "Lo strato gold di collaudo. Nel giro rosso, la tabella delle vendite e le anagrafiche che la descrivono."
          ],
          "alt": "Elenco delle tabelle dello strato gold",
          "evidenzia": [
            2.8,
            63,
            24.9,
            35.3
          ]
        }
      ]
    },
    {
      "luogo": "Report",
      "glossa": "la sala riunioni",
      "etichetta": "La stessa parola",
      "breve": "La stessa parola, la stessa cosa?",
      "domanda": "Quando due report usano la stessa parola, intendono la stessa cosa?",
      "risposta": "Sì, se la parola è nel glossario: 38 termini dell'area vendite pubblicati, ciascuno con definizione, uso e tabella di riferimento.",
      "spiegazione": [
        "Il caso che ha fatto scattare il lavoro: in un report «corsa» indicava la corsa programmata, in un altro quella effettuata. Il glossario scioglie l'ambiguità una volta per tutte: ogni termine ha un proprietario e una definizione approvata.",
        "Vive dentro la piattaforma, accanto alle tabelle che descrive. Quando la tabella ancora non c'è, la scheda lo dice."
      ],
      "nota": "38 termini, tutti pubblicati",
      "manca": "da aggiungere: la schermata del report in Power BI",
      "funzioni": [
        "bdo",
        "dgl"
      ],
      "documenti": [
        "policy",
        "vendite"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Il glossario e una sua voce",
          "testo": [
            "I 38 termini pubblicati per l'area vendite. Quello cerchiato, Validazione, è aperto a destra: definizione, origine, proprietario.",
            "Quando la tabella collegata non esiste ancora, la scheda lo dichiara."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "glossario-termine.jpg",
          "titolo": "La voce Validazione sulla piattaforma",
          "testo": [
            "La scheda del termine Validazione. Nel giro rosso la definizione; sotto, l'uso di business e il collegamento alla tabella."
          ],
          "alt": "Scheda del termine Validazione nel glossario",
          "evidenzia": [
            0.9,
            36.8,
            98.1,
            9.5
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "glossario-elenco.jpg",
          "titolo": "L'elenco dei termini pubblicati",
          "testo": [
            "I primi termini pubblicati del dominio Vendite, nel giro rosso."
          ],
          "alt": "Elenco dei termini pubblicati del glossario",
          "evidenzia": [
            0.5,
            16.9,
            29.1,
            82
          ]
        }
      ]
    },
    {
      "luogo": "Lungo tutta la strada",
      "glossa": "chi controlla il dato",
      "etichetta": "Le anomalie",
      "breve": "Come ci accorgiamo di un'anomalia, e chi la risolve?",
      "domanda": "Come ci accorgiamo di un'anomalia, e chi la risolve?",
      "risposta": "Un motore controlla ogni carico di dati con regole concordate. Se una regola bloccante fallisce, il carico si ferma e si apre un caso con un responsabile.",
      "spiegazione": [
        "Non tutte le anomalie sono errori. 911 conducenti senza data di patente sembravano dati incompleti: sono utenti che usano solo le e-bike. La regola è stata confermata dal proprietario del dato e scritta nel catalogo delle regole.",
        "Il motore non corregge e non scarta nulla: segnala, ferma se serve, apre un <b>caso</b>. È stato collaudato sui dati reali il 18 e 19 novembre 2026. Ogni giorno, in più, una misurazione fotografa lo stato di tutte le tabelle."
      ],
      "nota": "cinque giorni, tutte riuscite",
      "manca": "da aggiungere: i numeri del collaudo del motore",
      "funzioni": [
        "dgl",
        "bdo",
        "dto"
      ],
      "documenti": [
        "agosto",
        "motore"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Misurazioni, casi e una regola nata da un dubbio",
          "testo": [
            "In alto a sinistra le misurazioni di cinque giorni consecutivi, tutte riuscite. A destra la vita di un caso, da quando si apre a quando si chiude o viene accettato dal proprietario del dato.",
            "In basso l'esempio dei 911 conducenti: un'anomalia apparente che, verificata, è diventata una regola."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "profiling.jpg",
          "titolo": "Le esecuzioni di ogni giorno",
          "testo": [
            "La misurazione quotidiana sulla piattaforma: ogni colonna verde è un'esecuzione riuscita, in quattro passi."
          ],
          "alt": "Grafico delle esecuzioni della misurazione quotidiana",
          "evidenzia": null
        },
        {
          "tipo": "schermata",
          "immagine": "casi.jpg",
          "titolo": "La tabella dei casi",
          "testo": [
            "La tabella dei casi. Nel giro rosso la sua descrizione: un problema da gestire, con la regola che lo ha rilevato."
          ],
          "alt": "Scheda della tabella dei casi",
          "evidenzia": [
            2,
            17.2,
            96.1,
            13.8
          ]
        }
      ]
    },
    {
      "luogo": "Lungo tutta la strada",
      "glossa": "chi risponde del dato",
      "etichetta": "Chi risponde",
      "breve": "Chi risponde dei dati?",
      "domanda": "Chi risponde dei dati?",
      "risposta": "Tre funzioni, attribuite a figure già presenti in azienda: chi governa la piattaforma, chi è proprietario del dato di business, chi presiede il metodo.",
      "spiegazione": [
        "Il <b>Data Technology Owner</b> risponde della piattaforma. Il <b>Business Data Owner</b>, uno per dominio, risponde del significato: approva descrizioni, termini, categorie, regole. Il <b>Data Governance Lead</b> presidia il metodo su tutti i domini.",
        "Non è un organigramma a lato: sulla piattaforma ogni tabella, ogni termine e ogni caso hanno un proprietario."
      ],
      "nota": "il nome è oscurato: la Policy è in validazione",
      "funzioni": [
        "dto",
        "bdo",
        "dgl"
      ],
      "documenti": [
        "policy",
        "strategia"
      ],
      "approfondimenti": [
        {
          "tipo": "ridisegno",
          "titolo": "Tre funzioni, otto domande",
          "testo": [
            "Le tre funzioni di governo del dato e, sotto, la tabella che dice quale funzione presidia ciascuna domanda.",
            "Compaiono le funzioni e non i nomi: le attribuzioni della Policy sono in fase di validazione."
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "glossario-owner.jpg",
          "titolo": "Il proprietario di un termine",
          "testo": [
            "Ogni termine del glossario ha un proprietario: è il campo nel giro rosso, in testa alla scheda. Il nome è oscurato."
          ],
          "alt": "Scheda di un termine con il campo del proprietario evidenziato",
          "evidenzia": [
            0.9,
            32.7,
            42.7,
            6.8
          ]
        },
        {
          "tipo": "schermata",
          "immagine": "tabelle-owner.jpg",
          "titolo": "Il proprietario di ogni tabella",
          "testo": [
            "Ogni tabella ha un proprietario: è la colonna nel giro rosso. I nomi sono oscurati."
          ],
          "alt": "Elenco di tabelle con la colonna del proprietario evidenziata",
          "evidenzia": [
            27.9,
            69.1,
            18.2,
            29.3
          ]
        }
      ]
    }
  ],
  "tavole": {
    "1": {
      "t_priorita": "Le sei priorità della Strategia",
      "priorita": [
        "Decidere meglio, con dati affidabili",
        "Garantire la continuità del servizio",
        "Processi e reportistica più efficienti",
        "Una cultura interna del dato",
        "Meno applicativi dispersi",
        "Conformità alle norme"
      ],
      "t_indicatori": "17 indicatori, seguiti ogni trimestre",
      "nota": "quattro aspettano questo progetto",
      "indicatori": [
        "accessi alle dashboard",
        "dati aggiornati entro i tempi",
        "controlli di qualità attivi",
        "report prodotti in automatico"
      ]
    },
    "2": {
      "percorso": [
        "Catalogo dei dati",
        "Area vendite"
      ],
      "t_domini": "I sette domini informativi",
      "s_domini": "fin dove è arrivato ciascuno",
      "t_arrivi": "Dove arrivano i dati delle vendite",
      "s_arrivi": "uno spazio per ogni sistema: è il livello bronze",
      "sistemi": [
        [
          "Bigliettazione AEP",
          "bronze-aep"
        ],
        [
          "Portale clienti Solweb",
          "solweb"
        ],
        [
          "Sanzioni Hermes",
          "bronze-hermes"
        ],
        [
          "Sharing Corrente",
          "bronze-corrente"
        ],
        [
          "Contabilità Telemaco",
          "bronze-telemaco"
        ],
        [
          "Contapasseggeri",
          "bronze-contapasseggeri"
        ]
      ],
      "nota": "in grigio, il nome che ha sulla piattaforma"
    },
    "3": {
      "percorso": [
        "Catalogo dei dati",
        "Bigliettazione AEP, livello bronze",
        "Vendite TPER"
      ],
      "titolo": "Vendite TPER",
      "tecnico": "sulla piattaforma: bronze-aep.aep_salesext",
      "descrizione": "«La tabella contiene le vendite di titoli di viaggio e abbonamenti TPER registrate nel sistema di bigliettazione AEP. Le informazioni descrivono i prodotti commercializzati, gli importi, i canali distributivi e le condizioni di vendita.»",
      "etichette": [
        "certificata",
        "criticità: importante",
        "sensibilità: riservata",
        "contiene dati personali"
      ],
      "t_colonne": "Colonna per colonna",
      "colonne": [
        [
          "Identificativo",
          "Id",
          "identificativo della vendita nel sistema centrale AEP"
        ],
        [
          "Importo",
          "Amount",
          "importo dell'operazione di vendita"
        ],
        [
          "Numero tessera",
          "CardNumber",
          "numero del supporto su cui è caricato il titolo di viaggio"
        ]
      ],
      "note": [
        "scritta in italiano da chi conosce il dato",
        "quattro etichette di governo su ogni tabella",
        "21 tabelle e 1.355 colonne descritte così"
      ]
    },
    "4": {
      "percorso": [
        "Catalogo dei dati",
        "Tabelle di riferimento",
        "Codici e categorie"
      ],
      "codici": [
        [
          "31",
          "Titolo Urbano Bologna EMV"
        ],
        [
          "1006",
          "Titolo EMV extraurbano a zone"
        ],
        [
          "3560",
          "Bigl. Urbano Bologna"
        ],
        [
          "2277",
          "Bigl. Extraurbano a zone"
        ],
        [
          "6",
          "Borsellino elettronico"
        ],
        [
          "2101",
          "Annuale Bologna giovani"
        ],
        [
          "2085",
          "Mensile a zone TPER"
        ]
      ],
      "categorie": [
        "Corsa semplice con carta",
        "Corsa semplice con biglietto",
        "Borsellino elettronico",
        "Abbonamenti annuali",
        "Abbonamenti mensili"
      ],
      "abbinamenti": [
        0,
        0,
        1,
        1,
        2,
        3,
        4
      ],
      "sotto_codici": "i codici dei sistemi, come arrivano",
      "sotto_categorie": "le categorie che legge chi apre un report",
      "nota": "224 codici di titolo, 2.468 coppie codice-descrizione",
      "timbri": [
        "nasce proposta",
        "vale se approvata"
      ]
    },
    "5": {
      "percorso": [
        "Catalogo dei dati",
        "Vendite, livello gold",
        "Da dove viene il dato"
      ],
      "origini": [
        [
          "Vendite TPER",
          "livello silver, controllate"
        ],
        [
          "Vendite Marconi Express",
          "livello silver, controllate"
        ],
        [
          "Anagrafica dei titoli",
          "famiglia e bacino"
        ],
        [
          "Anagrafica dei canali",
          "dove si vende"
        ]
      ],
      "t_gold": "Vendite, livello gold",
      "s_gold": "per giorno, canale, titolo e azienda",
      "misure": [
        "venduto lordo",
        "venduto netto",
        "storni"
      ],
      "t_report": "Report commerciale",
      "nota_report": "in corso",
      "nota_livelli": "i tre livelli, in ordine",
      "livelli": [
        [
          "Bronze",
          "il dato com'è arrivato, intoccato"
        ],
        [
          "Silver",
          "solo ciò che ha superato i controlli"
        ],
        [
          "Gold",
          "la forma che serve a chi decide"
        ]
      ]
    },
    "6": {
      "percorso": [
        "Glossario",
        "Area vendite",
        "Validazione"
      ],
      "t_termini": "38 termini pubblicati",
      "s_termini": "il glossario dell'area vendite",
      "termini": [
        "Accertamento",
        "Agente",
        "Ammenda",
        "Annullamento in autotutela",
        "Apparato",
        "Atto giudiziario",
        "Bacino",
        "Blacklist tessere",
        "Blochetto",
        "Blue List",
        "Booking",
        "Boost",
        "Cedola",
        "Cliente",
        "Conducente",
        "Distanza percorsa",
        "EMV",
        "Gamma tariffaria",
        "Iscrizione a ruolo",
        "Lista bianca",
        "Ordine",
        "Pagamento",
        "Profilo utente",
        "ProntoBus",
        "Reclamo",
        "Reporting Center",
        "Ricorso",
        "STIMER",
        "Titolo di viaggio",
        "Trasgressore",
        "Validazione",
        "Veicolo condiviso",
        "Vendita",
        "Verbale",
        "Verbalizzante",
        "Verifica Tessera",
        "Violazione",
        "Voucher"
      ],
      "cerchiato": 30,
      "t_voce": "Validazione",
      "definizione": "Utilizzo effettivo di un titolo di viaggio, con informazioni sul servizio quali linea, zona e veicolo.",
      "campi": [
        [
          "nasce in",
          "bigliettazione AEP"
        ],
        [
          "ha un proprietario",
          "sì, e una definizione approvata"
        ],
        [
          "tabella collegata",
          "non ancora: la scheda lo dice"
        ]
      ],
      "nota": "«corsa»: programmata o effettuata? Una sola risposta, per tutti i report."
    },
    "7": {
      "percorso": [
        "Controlli di qualità",
        "La misurazione di ogni giorno"
      ],
      "t_misura": "Ogni giorno, una misurazione",
      "s_misura": "cinque esecuzioni al giorno, tutte riuscite",
      "giorni": [
        "20",
        "21",
        "22",
        "23",
        "24"
      ],
      "mese": "nov",
      "t_casi": "Se una regola fallisce, si apre un caso",
      "s_casi": "con un responsabile, fino alla chiusura",
      "stati": [
        "aperto",
        "in lavorazione",
        "chiuso"
      ],
      "oppure": "oppure",
      "accettato": "accettato",
      "dal": "dal proprietario",
      "nota": "il motore è stato collaudato il 18 e 19 novembre",
      "esempio": [
        [
          "911 conducenti senza data di patente",
          "sembrano dati incompleti"
        ],
        [
          "Non è un errore",
          "sono utenti che usano solo le e-bike"
        ],
        [
          "Diventa una regola",
          "confermata dal proprietario del dato"
        ]
      ]
    },
    "8": {
      "percorso": [
        "Catalogo dei dati",
        "Chi è il proprietario"
      ],
      "funzioni": [
        [
          "dto",
          "risponde della piattaforma e dei flussi"
        ],
        [
          "bdo",
          "uno per dominio: risponde del significato, approva termini e categorie"
        ],
        [
          "dgl",
          "presidia il metodo su tutti i domini"
        ]
      ],
      "nota": "funzioni e non nomi: la Policy è in validazione"
    }
  },
  "capolinea": {
    "prima": "Capolinea.",
    "riga": "Per l'area vendite, oggi sappiamo",
    "cerchiata": "rispondere",
    "sappiamo": [
      "quali dati abbiamo e che cosa significano",
      "chi ne risponde",
      "come li controlliamo",
      "da dove arriva ogni numero"
    ],
    "testo": [
      "L'ultimo tratto, il <b>report commerciale</b>, è in corso.",
      "Il percorso è tracciato e si può ripetere: Manutenzione è già analizzata, gli altri cinque domini sono inventariati."
    ],
    "strada": "otto domande, otto risposte",
    "pulsante": "Torna all'indice",
    "palina": "capolinea"
  },
  "disegni": {
    "dati": "dati",
    "affidabili": "affidabili",
    "anni": "2026-2028",
    "biglietti": "biglietti",
    "validazioni": "validazioni",
    "portale": "portale",
    "arrivi": "arrivi",
    "controlli": "controlli",
    "numeri": "numeri",
    "decisioni": "decisioni",
    "glossario": "glossario",
    "vendite": "vendite",
    "fermate": "fermate"
  },
  "interfaccia": {
    "apri": "apri a tutta pagina",
    "chiudi": "torna alla fermata",
    "avanti": "Avanti",
    "indietro": "Indietro",
    "al_capolinea": "Al capolinea",
    "ridisegno": "sulla piattaforma, ridisegnato",
    "vera": "la schermata vera, com'è",
    "citazione": "dal documento",
    "parte_di": "fermata",
    "in_questa": "in questa fermata",
    "approfondire": "Per approfondire",
    "doc_progetto": "(documentazione di progetto)",
    "mancante": "Schermata non trovata: la cartella «img» deve stare accanto a questa pagina.",
    "si": "sì",
    "funzione": "Funzione",
    "fermata": "Fermata",
    "vista": "già vista",
    "da_vedere": "da vedere",
    "successiva": "la successiva è in corso",
    "di": "di"
  }
};
