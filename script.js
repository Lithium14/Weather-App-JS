let villeChoisie;

if('geolocation' in navigator) {
  navigator.geolocation.watchPosition((position) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' + position.coords.longitude
    +'&lat='+position.coords.latitude+ '&appid=5fd86de924230b9904fe00b8cd701784&units=metric';
    console.log(url)
    let requete = new XMLHttpRequest();

    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
      if(requete.readyState === XMLHttpRequest.DONE) {
        if(requete.status === 200) {
          let reponse     = requete.response;
          let ville       = reponse.name;
          let temperature = reponse.main.temp;
          document.querySelector('#ville').textContent = ville;
          document.querySelector('#temperature_label').textContent = temperature;
        }
      } else {
        alert('Un problème est survenu.')
      }
    }

  }, erreur, options);

} else {
  villeChoisie = 'Bordeaux';
  recevoirTemperature(villeChoisie);
}

var options = {
  enableHightAccuracy: true
}

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  ville = prompt('Entrer la nouvelle ville');
  recevoirTemperature(ville);
});

function erreur() {
  villeChoisie = 'Bordeaux';
  recevoirTemperature(villeChoisie);
}


function recevoirTemperature(ville) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=5fd86de924230b9904fe00b8cd701784&units=metric';
  let requete = new XMLHttpRequest();

  requete.open('GET', url);
  requete.responseType = 'json';
  requete.send();

  requete.onload = function() {
    if(requete.readyState === XMLHttpRequest.DONE) {
      if(requete.status === 200) {
        let reponse     = requete.response;
        let ville       = reponse.name;
        let temperature = reponse.main.temp;
        document.querySelector('#ville').textContent = ville;
        document.querySelector('#temperature_label').textContent = temperature;
      }
    } else {
      alert('Un problème est survenu.')
    }
  }
}
