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
      var numeroKm = document.getElementById('km').value;
      console.log(numeroKm);
      // eta del passeggero
      var eta = document.getElementById('fascia_eta').value;
      console.log(eta);
      // prezzo table_biglietto
      var prezzoPerKm = 0.21;
      var prezzoStandard = numeroKm * prezzoPerKm;
      console.log(prezzoStandard);
      // sconto del 20% per i minorenni
      var scontoUnder = (prezzoStandard * 20 / 100);
      console.log(scontoUnder);
      // sconto del 40% over 65
      var scontoOver = (prezzoStandard * 40 / 100);
      console.log(scontoOver);
      // messaggio sconto
      var messaggio = "Biglietto Standard";
      // applicare lo sconto
      if (eta == "minorenne") {
          messaggio = "Offerta Giovani";
          document.getElementById('offerta_passeggero').innerHTML = messaggio;
          var prezzoFinale = prezzoStandard - scontoUnder;
          prezzoFinale = prezzoFinale.toFixed(2);
          console.log(prezzoFinale);
          document.getElementById('costo_biglietto').innerHTML = prezzoFinale + " €";
      } else if (eta == "over 65") {
          messaggio = "Offerta Over 65";
          document.getElementById('offerta_passeggero').innerHTML = messaggio;
          var prezzoFinale = prezzoStandard - scontoOver;
          prezzoFinale = prezzoFinale.toFixed(2);
          console.log(prezzoFinale);
          document.getElementById('costo_biglietto').innerHTML =  prezzoFinale + " €";

      } else {
          document.getElementById('offerta_passeggero').innerHTML = messaggio;
          document.getElementById('costo_biglietto').innerHTML =  prezzoStandard + " €";
          console.log(prezzoStandard);
      }

      // inserire dati nel html
      document.getElementById('nome_passeggero').innerHTML = nomeDelPasseggero;
    }
  );
