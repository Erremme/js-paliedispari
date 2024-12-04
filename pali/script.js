//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
 

//1 funzione
function AreElementSame ( wort1, wort2){
 //2qusta funzione deve verificare se la parola inserita dallo user è palindroma
 for(let i = wort1.length -1; i >= 0; i--){
    wort2 += wort1[i]
    let isElementPali =false
    if( wort1 === wort2){
        isElementPali = true;
        return isElementPali;
        
 }
}
}

//3 faccio inserire la parola allo user
const Userwort = prompt( "Inserisci una parola")
//4 Inializzo una variabile con una stringa vuota
let UserwortReverse = "";
//5 inizializzo una variabile di default con valore false
let IsPaliWort= false;
//6 utilizzo la mia funzione
IsPaliWort = AreElementSame( Userwort , UserwortReverse)

if(IsPaliWort){
    alert("La parola che hai inserito è palindroma")
}else{
    alert("La parona non corrisponde")
}



  