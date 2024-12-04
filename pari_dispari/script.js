/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Domande da  farsi quando si crea una funzione:
1. Come dovrebbe chiamarsi?
2. Ho bisogno di parametri?
3. Devo restituire un valore?
4. Se sì, di che tipo?*/

//1 che funzioni mi servono?
//1.2 funzione che genera numero random
function getRandomNumber( min , max ){
    const random = (Math.floor(Math.random() * max) + min )
    return random;
}
//1.3funzione che somma
function sum( numb1, numb2){
    const result = numb1 + numb2
    return result;
}
//1.4 funzione che determina se la somma e paei o dispari
function isEvenOrOdd( numb){
    if( numb % 2 === 0){
        return true;
    }else{
        return false;
    }
}

//2 chiedo allo user di inserire un num tra 1 e 5
const userNumber = Number(prompt("Inserisci un numero 1 a 5"))
//3 genero un numero random per la cpu
const cpuNumber = getRandomNumber(1,5)
alert(`l numero del cpu è ${cpuNumber}`)
//4 sommo i numeri
let sumNumber = sum( userNumber, cpuNumber)
//5 verifico se la somma dei numeri è pari
let isNumberEvenrOrOdd= isEvenOrOdd( sumNumber);

if(isNumberEvenrOrOdd){
    alert("Il numero è pari, HAI VINTO")
}else{
    alert("Il numero è dispari, HAI PERSO")
    
}