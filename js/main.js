const namnInput = document.getElementById('namn');
const telefonnummerInput = document.getElementById('telefonnummer');
const skapaKontaktKnapp = document.getElementById('skapaKontaktKnapp');
const kontakterUl = document.getElementById('kontakterUl');
const KontaktLista = document.getElementById('kontakter');


// Händelse för klick på "Skapa kontakt"
skapaKontaktKnapp.addEventListener('click', function (){
    const namn = namnInput.value;
    const telefonnummer = telefonnummerInput.value;

    if (namn && telefonnummer) {
        skapaKontakt();
        namnInput.value = "";
        telefonnummerInput.value = "";
    }
});

//----------------Funktion för att skapa en kontakt----------------
function skapaKontakt(){
    const listanKontakter = document.createElement('li');
    let namnLista = document.createElement('input');
    namnLista.setAttribute('value', namn.value)
    namnLista.setAttribute('disabled', true)
    let nummerLista = document.createElement('input');
    nummerLista.setAttribute('value', telefonnummer.value)
    nummerLista.setAttribute('disabled', true)

    //----------Lägg till redigerings- och raderingsknapp----------
    let redigeraBtn = document.createElement('button');
    redigeraBtn.innerText = "Redigera";
    
    const raderaBtn = document.createElement('button');
    raderaBtn.innerText = 'Radera';
    raderaBtn.addEventListener('click', function(e){
        e.target.parentNode.remove();
    });
    listanKontakter.appendChild(namnLista);
    listanKontakter.appendChild(nummerLista);
    listanKontakter.appendChild(redigeraBtn);
    listanKontakter.appendChild(raderaBtn);
    kontakterUl.appendChild(listanKontakter);
    
    
    redigeraBtn.addEventListener('click', redigeraKontakt);
    function redigeraKontakt(){
        if (redigeraBtn.innerText==="Redigera"){
        namnLista.disabled=false
        nummerLista.disabled=false 
        redigeraBtn.innerText="Spara";
        }
        else {
            namnLista.disabled=true
            nummerLista.disabled=true 
            redigeraBtn.innerText="Redigera";
        }
    }
}

