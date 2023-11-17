Linee guida per la scrittura di codice
======================================

Nomina Significativa
--------------------

Scegliere nomi di variabili, funzioni e classi descrittivi e significativi. Un buon nome dovrebbe indicare chiaramente lo scopo e la funzione dell'elemento.

**Corretto:**

.. code-block:: python

   def calcola_area_rettangolo(base, altezza):
       return base * altezza

**Sbagliato:**

.. code-block:: python

   def xyz(a, b):
       return a * b

Struttura/indentazione del codice
---------------------------------

Usare una struttura logica e coerente nel codice, ordinare le funzioni e le sezioni in modo che il flusso del programma sia intuitivo. Mantenere uno stile di indentazione uniforme per facilitare la lettura. Usare spazi in modo coerente per migliorare la chiarezza.

**Corretto:**

.. code-block:: python

   def funzione_principale():
       if condizione:
           esegui_operazione()
       else:
           esegui_altro()

**Sbagliato:**

.. code-block:: python

   def funzione_principale():
    if condizione:
    esegui_operazione()
    else:
    esegui_altro()

Commenti Efficaci
-----------------

Aggiungere commenti solo quando necessario per spiegare concetti complessi o decisioni non ovvie. Troppi commenti possono diventare ridondanti.

**Corretto:**

.. code-block:: python

   def calcola_area_cerchio(raggio):
       # La formula per calcolare l'area di un cerchio è A = π * r^2
       return 3.14 * raggio**2

**Sbagliato:**

.. code-block:: python

   def calcola_area_cerchio(raggio):
       # Questa funzione calcola l'area del cerchio
       return 3.14 * raggio**2

Separazione di Interessi
------------------------

Dividere il codice in moduli o funzioni che si occupano di compiti specifici. Ciò migliora la leggibilità e la manutenibilità.

**Corretto:**

.. code-block:: python

   def elabora_dati(data):
       # Codice per elaborare i dati

   def visualizza_dati_elaborati():
       # Codice per visualizzare i dati elaborati

**Sbagliato:**

.. code-block:: python

   def elabora_e_visualizza_dati(data):
       # Codice per elaborare e visualizzare i dati

Evitare la Complessità Eccessiva
---------------------------------

Non complicare inutilmente il codice. Se una funzione diventa troppo complessa, considerare la possibilità di suddividerla in funzioni più piccole. Cercare di mantenere le funzioni relativamente brevi. Le funzioni lunghe possono essere difficili da comprendere e testare.

**Corretto:**

.. code-block:: python

   def valida_numero(numero):
       # Codice per verificare se il numero è valido
       return numero > 0 and isinstance(numero, int)

**Sbagliato:**

.. code-block:: python

   def verifica_numero(numero):
       # Codice complesso con troppe condizioni
       if numero > 0 and isinstance(numero, int) and numero % 2 == 0 or some_other_condition:
           # Altro codice complesso
           return True
       else:
           return False

Evitare Nomi Ambigui
--------------------

Evitare nomi ambigui o troppo generici che potrebbero causare confusione. Usare nomi che riflettano con precisione la funzione dell'elemento.

**Corretto:**

.. code-block:: python

   def calcola_media(valori):
       # Codice per calcolare la media di una lista di valori
       return sum(valori) / len(valori)

**Sbagliato:**

.. code-block:: python

   def esegui_operazione(lista):
       # Operazione su una lista, ma non chiaro quale
       return some_operation(lista)

Documentazione Chiara
---------------------

Scrivere una documentazione chiara per le funzioni, le classi e i moduli. Spiegare lo scopo, i parametri e il valore restituito. Limitare l'uso di abbreviazioni e assicurarsi che siano comprensibili. Nomi completi sono spesso preferibili per migliorare la chiarezza.

**Corretto:**

.. code-block:: python

   def calcola_area_triangolo(base, altezza):
       """
       Calcola l'area di un triangolo.

       Parameters:
       - base (float): Lunghezza della base del triangolo.
       - altezza (float): Altezza del triangolo rispetto alla base.

       Returns:
       float: Area del triangolo calcolata utilizzando la formula (base * altezza) / 2.
       """
       return (base * altezza) / 2

**Sbagliato:**

.. code-block:: python

   def triangolo(b, h):
       """
       Calcola l'area del triangolo.
       """
       return (b * h) / 2

Segui le Convenzioni del Linguaggio
-----------------------------------

Adottare le convenzioni di denominazione e gli stili di codifica del linguaggio che stai utilizzando. Ciò rende il tuo codice familiare agli altri sviluppatori.

**Corretto:**

.. code-block:: python

   def calcola_area_quadrato(lato):
       return lato**2

**Sbagliato:**

.. code-block:: python

   def calcolaAreaQuadrato(lato):
       return lato**2

.. important::

   Esempio valido solo per **Python**. Altri linguaggi potrebbero avere convenzioni diverse.

Testare e Verificare
--------------------

Scrivere dei test unitari per le funzioni critiche e verifica il comportamento del tuo codice. Un codice ben testato è più affidabile e comprensibile. Praticare il refactoring del codice regolarmente. Mantenere il codice pulito è un processo continuo.
