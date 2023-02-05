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

function desactivatel(){
    desactivate(lh8)
    desactivate(lh9)
    desactivate(lh11)
    desactivate(lh13)
    desactivate(lh15)
    desactivate(lh16)
}


var creneau = document.getElementById("creneau");
function onChange() {
    var value = creneau.value;
    // var text = creneau.options[creneau.selectedIndex].text;
    if(value == 0){
        desactivatel()
    } else{
        desactivatel()
        activate(document.getElementById("lh"+value))
    }
}
creneau.onchange = onChange;
onChange()