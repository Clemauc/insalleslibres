const lh8 = document.getElementById("lh8")
const lh9 = document.getElementById("lh9")
const lh11 = document.getElementById("lh11")
const lh13 = document.getElementById("lh13")
const lh15 = document.getElementById("lh15")
const lh16 = document.getElementById("lh16")

function activate(a) {
    a.classList.remove('inactive')
    a.classList.add('active')
}

function desactivate(a){
    a.classList.remove('active')
    a.classList.add('inactive')
}

function activatep(a) {
    a.classList.remove('inactivep')
    a.classList.add('activep')
}

function desactivatep(a){
    a.classList.remove('activep')
    a.classList.add('inactivep')
}

function desactivatel(){
    desactivate(lh8)
    desactivate(lh9)
    desactivate(lh11)
    desactivate(lh13)
    desactivate(lh15)
    desactivate(lh16)
}


var creneau = document.getElementById("creneau");


const searchbar = document.getElementById('searchbar')
export function Searchbar(){
    let content = searchbar.value
    content = content.toLowerCase();
    let value = creneau.value
    if(value == '9' || value == '16'){
        value=value+'_45'
    }
    if(value == '11'){
        value=value+'_30'
    }
    if(value == '13'){
        value=value+'_15'
    }
    let x = document.getElementsByClassName('t'+value) //'t'+value
    let i = 0
    for(i=0; i < x.length; i++){
      if (!x[i].innerHTML.toLowerCase().includes(content)) {
        desactivatep(x[i])
      } else {
        activatep(x[i])
      }
    }
    let Mav = document.getElementById('Ma'+value)
    let Duv = document.getElementById('Du'+value)
    let Lhv = document.getElementById('Lh'+value)
    let Bov = document.getElementById('Bo'+value)
    let Dav = document.getElementById('Da'+value)
    let Ma = document.getElementsByClassName('Ma activep t'+value)
    let Du = document.getElementsByClassName('Du activep t'+value)
    let Lh = document.getElementsByClassName('Lh activep t'+value)
    let Bo = document.getElementsByClassName('Bo activep t'+value)
    let Da = document.getElementsByClassName('Da activep t'+value)
    let nbT = Ma.length+Du.length+Lh.length+Bo.length+Da.length
    // afficher salles libres en tout, pour chaque bat, ...
    const nbt = document.getElementById('nbt')
    const nbs = document.getElementById('nbs')
    if(value != 0){
        if (Ma.length == 0){
            desactivatep(Mav)
        } else {
            activatep(Mav)
        }
        if (Du.length == 0){
            desactivatep(Duv)
        } else {
            activatep(Duv)
        }
        if (Lh.length == 0){
            desactivatep(Lhv)
        } else {
            activatep(Lhv)
        }
        if (Bo.length == 0){
            desactivatep(Bov)
        } else {
            activatep(Bov)
        }
        if (Da.length == 0){
            desactivatep(Dav)
        } else {
            activatep(Dav)
        }
        activatep(nbs)
        nbt.innerHTML = nbT
    } else {
        desactivatep(nbs)
    }
    
    
}
Searchbar()

searchbar.addEventListener('input', function(){
    Searchbar()
})

function onChange() {
    let value = creneau.value;
    // var text = creneau.options[creneau.selectedIndex].text;
    if(value == 0){
        desactivatel()
    } else{
        desactivatel()
        activate(document.getElementById("lh"+value))
    }
    Searchbar()
}
onChange()

creneau.addEventListener('change', function(){
    onChange()
})