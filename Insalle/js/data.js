import { Searchbar } from "./menu.js"

const date = new Date()
var day = date.getDay()

// liste des heures de début des créneaux
let heure = ['8', '9_45', '11_30', '13_15', '15', '16_45']

if (day == 6 || day == 7){
  day = 1
}

var dayfrom = document.getElementById('day')
dayfrom.selectedIndex= (day-1).toString()

function getdata(day){
  //pour chaque élément de la liste ...
  heure.forEach(function(item, indice){
    // ... récupère les endroits dans le fichier html où l'on va insérer les données ...
    const aMa = document.getElementById("Ma"+item);
    const aDu = document.getElementById("Du"+item);
    const aLh = document.getElementById("Lh"+item);
    const aBo = document.getElementById("Bo"+item);
    const aDa = document.getElementById("Da"+item);
    // const aa = document.getElementById("Autres"+item);
    fetch("./Py/listesalles"+day+".json")
      .then((response) => {
        const data = response.json();
        data.then((response) => {
          // listes contenants toutes les données de chaques bâtiments créneau par créneau
          const Ma = [
            response.h8.Magellanh8,
            response.h9_45.Magellanh9_45,
            response.h11_30.Magellanh11_30,
            response.h13_15.Magellanh13_15,
            response.h15.Magellanh15,
            response.h16_45.Magellanh16_45
          ];
          const Du = [
            response.h8.Dumonth8,
            response.h9_45.Dumonth9_45,
            response.h11_30.Dumonth11_30,
            response.h13_15.Dumonth13_15,
            response.h15.Dumonth15,
            response.h16_45.Dumonth16_45
          ];
          const Lh = [
            response.h8.Lhh8,
            response.h9_45.Lhh9_45,
            response.h11_30.Lhh11_30,
            response.h13_15.Lhh13_15,
            response.h15.Lhh15,
            response.h16_45.Lhh16_45
          ];
          const Bo = [
            response.h8.Bougainvilleh8,
            response.h9_45.Bougainvilleh9_45,
            response.h11_30.Bougainvilleh11_30,
            response.h13_15.Bougainvilleh13_15,
            response.h15.Bougainvilleh15,
            response.h16_45.Bougainvilleh16_45
          ];
          const Da = [
            response.h8.Darwinh8,
            response.h9_45.Darwinh9_45,
            response.h11_30.Darwinh11_30,
            response.h13_15.Darwinh13_15,
            response.h15.Darwinh15,
            response.h16_45.Darwinh16_45
          ];
          // const a = [
          //   response.h8.AutresSallesh8,
          //   response.h9_45.AutresSallesh9_45,
          //   response.h11_30.AutresSallesh11_30,
          //   response.h13_15.AutresSallesh13_15,
          //   response.h15.AutresSallesh15,
          //   response.h16_45.AutresSallesh16_45
          // ];
          // ... et insère les données aux bons endroits pour le bon créneau
          aMa.innerHTML = Ma[indice];
          aDu.innerHTML = Du[indice];
          aLh.innerHTML = Lh[indice];
          aBo.innerHTML = Bo[indice];
          aDa.innerHTML = Da[indice];
          // aa.innerHTML = a[indice];
          aMa.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Magellan</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\"><p class=\"salle Ma t"+item+"\">"+aMa.innerHTML.replaceAll(',', "</p><p class=\"salle Ma t"+item+"\">")+"</p></td></tr></tbody></table>"
          aDu.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Dumont d\'Urville</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\"><p class=\"salle Du t"+item+"\">"+aDu.innerHTML.replaceAll(',', "</p><p class=\"salle Du t"+item+"\">")+"</p></td></tr></tbody></table>"
          aLh.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Lh</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\"><p class=\"salle Lh t"+item+"\">"+aLh.innerHTML.replaceAll(',', "</p><p class=\"salle Lh t"+item+"\">")+"</p></td></tr></tbody></table>"
          aBo.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Bougainville</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\"><p class=\"salle Bo t"+item+"\">"+aBo.innerHTML.replaceAll(',', "</p><p class=\"salle Bo t"+item+"\">")+"</p></td></tr></tbody></table>"
          aDa.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Darwin</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\"><p class=\"salle Da t"+item+"\">"+aDa.innerHTML.replaceAll(',', "</p><p class=\"salle Da t"+item+"\">")+"</p></td></tr></tbody></table>"
          // aa.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Autres salles</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\"><p class=\"salle\">"+aa.innerHTML.replaceAll(',', '</p><p class=\"salle\">')+"</p></td></tr></tbody></table>"
          Searchbar()
        })
    
    // en cas d'erreur    
    }) .catch((erreur) => {
      console.log(erreur)
    })
  })
}

const searchbar = document.getElementById('searchbar')
function onChange() {
  // let searchbar_value= searchbar.value
  var value = dayfrom.value;
  day = value
  getdata(day)
}
onChange()

dayfrom.addEventListener('change', function(){
  onChange()
})
