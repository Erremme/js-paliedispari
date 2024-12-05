//Palidroma
//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma
 

//1 funzione
function AreElementSame ( wort){
 //2qusta funzione deve verificare se la parola inserita dallo user è palindroma
 let UserwortReverse = "";
 for(let i = wort.length -1; i >= 0; i--){
    UserwortReverse += wort[i]
    
}
    if( wort === UserwortReverse){
        return true      
 }
    return false;
}


//3 faccio inserire la parola allo user
const Userwort = prompt( "Inserisci una parola")
//4 utilizzo la mia funzione
IsPaliWort = AreElementSame( Userwort )

if(IsPaliWort){
    alert("La parola che hai inserito è palindroma")
}else{
    alert("La parona non corrisponde")
}



  