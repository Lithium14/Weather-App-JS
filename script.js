let ville = 'Paris';
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {
  ville = prompt('Entrer la nouvelle ville');
  recevoirTemperature(ville);
});


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
