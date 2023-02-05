const date = new Date()
var day = date.getDate() + 1

// liste des heures de début des créneaux
let heure = ['8', '9_45', '11_30', '13_15', '15', '16_45']

if (day == 6 || day == 7){
  day = 1
}

var dayfrom = document.getElementById('day')
dayfrom.selectedIndex= (day-1).toString()

function getdata(day, searchword, longueur){
  //pour chaque élément de la liste ...
  heure.forEach(function(item, indice){
    // ... récupère les endroits dans le fichier html où l'on va insérer les données ...
    const aMa = document.getElementById("Ma"+item)
    const aDu = document.getElementById("Du"+item);
    const aLh = document.getElementById("Lh"+item);
    const aBo = document.getElementById("Bo"+item);
    const aDa = document.getElementById("Da"+item);
    const aa = document.getElementById("Autres"+item);
    fetch("./Py/listesalles"+day+".json")
      .then((response) => {
        const data = response.json();
        data.then((response) => {
          // listes contenants toutes les données de chaques bâtiments créneau par créneau
          var Ma = [
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
          const a = [
            response.h8.AutresSallesh8,
            response.h9_45.AutresSallesh9_45,
            response.h11_30.AutresSallesh11_30,
            response.h13_15.AutresSallesh13_15,
            response.h15.AutresSallesh15,
            response.h16_45.AutresSallesh16_45
          ];
          // ... et insère les données aux bons endroits pour le bon créneau
          aMa.innerHTML = Ma[indice];
          aDu.innerHTML = Du[indice];
          aLh.innerHTML = Lh[indice];
          aBo.innerHTML = Bo[indice];
          aDa.innerHTML = Da[indice];
          aa.innerHTML = a[indice];
          // recherche
          if (searchword != ''){
            var longueur = searchword.length
            aMa.innerHTML = aMa.innerHTML.slice(aMa.innerText.search(searchword), aMa.innerText.search(searchword)+ longueur)
            aDu.innerHTML = aDu.innerHTML.slice(aDu.innerText.search(searchword), aDu.innerText.search(searchword)+ longueur)
            aLh.innerHTML = aLh.innerHTML.slice(aLh.innerText.search(searchword), aLh.innerText.search(searchword)+ longueur)
            aBo.innerHTML = aBo.innerHTML.slice(aBo.innerText.search(searchword), aBo.innerText.search(searchword)+ longueur)
            aDa.innerHTML = aDa.innerHTML.slice(aDa.innerText.search(searchword), aDa.innerText.search(searchword)+ longueur)
            aa.innerHTML = aa.innerHTML.slice(aa.innerText.search(searchword), aa.innerText.search(searchword)+ longueur)
          }
          aMa.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Magellan</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\">"+aMa.innerHTML.replaceAll(',', '<br>')+"</td></tr></tbody></table>"
          aDu.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Dumont d\'Urville</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\">"+aDu.innerHTML.replaceAll(',', '<br>')+"</td></tr></tbody></table>"
          aLh.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Lh</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\">"+aLh.innerHTML.replaceAll(',', '<br>')+"</td></tr></tbody></table>"
          aBo.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Bougainville</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\">"+aBo.innerHTML.replaceAll(',', '<br>')+"</td></tr></tbody></table>"
          aDa.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Darwin</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\">"+aDa.innerHTML.replaceAll(',', '<br>')+"</td></tr></tbody></table>"
          aa.innerHTML = "<table id=\"table\"><thead><tr id=\"t2\"><th id=\"t\">Autres salles</th></tr></thead><tbody><tr id=\"t\"><td id=\"t\">"+aa.innerHTML.replaceAll(',', '<br>')+"</td></tr></tbody></table>"
        })
    
    // en cas d'erreur    
    }) .catch((erreur) => {
      console.log(erreur)
    })
  })
}

const content = document.getElementById('searchbar')

function Search(){
  var values = content.value
  getdata(day, values)
}
content.onchange = Search;
Search()

function onChange() {
  var value = dayfrom.value;
  day = value
  getdata(day, content.value)
}
dayfrom.onchange = onChange;
onChange()


