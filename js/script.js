// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)
// Aggiungiamo una piccola animazione al click su "Crea" e "Annulla", se clicchiamo su annulla dobbiamo ripulire il form.

// bottone di conferma
var bottoneGenera = document.getElementById('conferma');
bottoneGenera.addEventListener( 'click',
    function() {
      // nome del passeggero
      var nomeDelPasseggero = document.getElementById('nome_cognome').value;
      console.log(nomeDelPasseggero);
      // km da percorrere
      var numeroKM = document.getElementById('km').value;
      console.log(numeroKM);
      // eta del passeggero
      var eta = document.getElementById('fascia_eta').value;
      console.log(eta);
      // inserire dati nel html
      document.getElementById('nome_passeggero').innerHTML = nomeDelPasseggero;
    }
  );
