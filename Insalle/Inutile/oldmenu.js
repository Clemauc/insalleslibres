const menu = document.querySelector(".menu")
const h8 = document.querySelector(".h8")
const h9 = document.querySelector(".h9")
const h11 = document.querySelector(".h11")
const h13 = document.querySelector(".h13")
const h15 = document.querySelector(".h15")
const h16 = document.querySelector(".h16")
const lh8 = document.querySelector("#lh8")
const lh9 = document.querySelector("#lh9")
const lh11 = document.querySelector("#lh11")
const lh13 = document.querySelector("#lh13")
const lh15 = document.querySelector("#lh15")
const lh16 = document.querySelector("#lh16")

function activate(a) {
    a.classList.remove('inactive')
    a.classList.add('active')
}

function desactivate(a){
    a.classList.remove('active')
    a.classList.add('inactive')
}

function activateh(){
    activate(h8)
    activate(h9)
    activate(h11)
    activate(h13)
    activate(h15)
    activate(h16)
}

function desactivateh(){
    desactivate(h8)
    desactivate(h9)
    desactivate(h11)
    desactivate(h13)
    desactivate(h15)
    desactivate(h16)
}

function desactivatel(){
    desactivate(lh8)
    desactivate(lh9)
    desactivate(lh11)
    desactivate(lh13)
    desactivate(lh15)
    desactivate(lh16)
}

function swich(button, button2, list){
    button.addEventListener('click', () =>  {
        desactivateh()
        desactivatel()
        activate(button2)
        activate(list)
    })
}

menu.addEventListener('click', () =>  {
    activateh()
})

swich(h8,h8,lh8)
swich(h9,h9,lh9)
swich(h11,h11,lh11)
swich(h13,h13,lh13)
swich(h15,h15,lh15)
swich(h16,h16,lh16)

// <button class="menu">Choisissez un créneau</button>
//<button class="heure h8">8h-9h30</button>
//<button class="heure h9" id="">9h45-11h15</button>
//<button class="heure h11">11h30-13h</button>
//<button class="heure h13">13h15-14h45</button>
//<button class="heure h15">15h-16h30</button>
//<button class="heure h16">16h45-18h15</button>