/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
JavaScrips utilizza 7 DataType primitivi:

1. String = Identifica una stringa di caratteri 
2. Number =Identifica un valore numerico che può essere sia intero sia decimale
3. Bigint = E'poco utilizzato e serve a rappresentare valori molto grandi per i quali sarebbe difficile usare un formato numerico
4. Boolean = Restituisce solo due valori che sono o Vero o Falso
5. Undefined = Identifica qualcosa che non ha un valore assegnato oppure un campo vuoto
6. Null = Identifica un vuoto lasciato intenzionalmente 
7. Symbol = E' poco utilizzato solo per creare un identificatore unico che non si ripete mai
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Caterina";
console.log("Contenuto variabile name: ", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let firstNumber = 12;
let secondNumber = 20;

console.log("Risultato operazione", firstNumber + secondNumber);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name = "Munno";
console.log("Contenuto variabile name: ", name);

const myName = "Caterina";
console.log("Contenuto variabile myName:", myName);

/*myName = "Munno";*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log("Risultato della sottrazione tra 4-x:", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";
console.log("Le due variabili sono diverse?", name1 !== name2);
console.log("Extra - Le due variabili sono diverse?", name1.toLowerCase() !== name2.toLowerCase());
