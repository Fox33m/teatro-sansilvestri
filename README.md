Progetto eseguito su Angular

Il progetto genera un array di 7 file, ognuna contenente 10 posti;

per selezionare un posto bisogna cliccarci sopra, si possono selezionare più
posti; un indicatore comparirà sotto il teatro indicando in quantitativo 
di posti selezionati e il prezzo complessivo (impostato a 10€ a biglietto + 
una quota di 5€ invariata dal numerodi biglietti acquistati);
per deselezionare un posto basta ricliccarci sopra, non è possibile selezionare
un posto già prenotato.

in fondo alla pagina sono presenti due pulsanti: "cancella" e "pagamento",
il pulsante "cancella" eliminerà tutti i posti selezionati, mentre il pulsante
"pagamento" renderà i posti selezionati dei posti prenotati, nonostante i pulsanti
siano inattivi fintantoché un posto non viene selezionato può capitare che essi
si attivino per errore (possibile del browser) pertanto, qualora succedesse, il
pulsante di pagamento mostra un allert che indica l'assenza di posti selezionati

nel file "index.html" nella src sono presenti collegamenti a codici di bootstrap
necessari per far funzionare le funzioni su "app.component.ts"; i codici in questione
NON sono stati scritti da me
