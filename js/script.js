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
      // km da percorrere
      var numeroKm = document.getElementById('km').value;
      // eta del passeggero
      var eta = document.getElementById('fascia_eta').value;
      // prezzo table_biglietto
      var prezzoPerKm = 0.21;
      var prezzoStandard = numeroKm * prezzoPerKm;
      // sconto del 20% per i minorenni
      var scontoUnder = (prezzoStandard * 20 / 100);
      // sconto del 40% over 65
      var scontoOver = (prezzoStandard * 40 / 100);
      // messaggio sconto
      var messaggio = "Biglietto <br>Standard";
      // applicare lo sconto
      if (eta == "minorenne") {
          messaggio = "Offerta <br>Giovani";
          document.getElementById('offerta_passeggero').innerHTML = messaggio;
          var prezzoFinale = prezzoStandard - scontoUnder;
          prezzoFinale = prezzoFinale.toFixed(2);
          document.getElementById('costo_biglietto').innerHTML = prezzoFinale + " €";
      } else if (eta == "over 65") {
          messaggio = "Offerta <br>Over 65";
          document.getElementById('offerta_passeggero').innerHTML = messaggio;
          var prezzoFinale = prezzoStandard - scontoOver;
          prezzoFinale = prezzoFinale.toFixed(2);
          document.getElementById('costo_biglietto').innerHTML =  prezzoFinale + " €";
      } else {
          document.getElementById('offerta_passeggero').innerHTML = messaggio;
          document.getElementById('costo_biglietto').innerHTML =  prezzoStandard + " €";
      }

      // dati del biglietto
      document.getElementById('nome_passeggero').innerHTML = nomeDelPasseggero;
      var carrozzaPassegero = Math.floor( Math.random() * 10) + 1;
      document.getElementById('carrozza_passeggero').innerHTML = carrozzaPassegero;
      var codiceCP = Math.floor( Math.random() * 10000) + 90000;
      document.getElementById('codice_passeggero').innerHTML = codiceCP;

      // biglietto show
      var bigliettoTreno = document.getElementById('biglietto');
      bigliettoTreno.className = 'show';
    }
  );

  var bottoneAnnulla = document.getElementById('annulla');
  bottoneAnnulla.addEventListener( 'click',
      function() {
        var bigliettoTreno = document.getElementById('biglietto');
        bigliettoTreno.className = 'hidden';

        // cancellare dati info
        document.getElementById('nome_cognome').value = '';
        document.getElementById('km').value = '';
        document.getElementById('fascia_eta').value = '';
        // cancellare dati biglietto
        document.getElementById('nome_passeggero').innerHTML = '';
        document.getElementById('offerta_passeggero').innerHTML = '';
        document.getElementById('carrozza_passeggero').innerHTML = '';
        document.getElementById('codice_passeggero').innerHTML = '';
        document.getElementById('costo_biglietto').innerHTML = '';
      }
  );
