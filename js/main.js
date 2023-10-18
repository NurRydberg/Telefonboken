const namnInput = document.getElementById('namn');
const telefonnummerInput = document.getElementById('telefonnummer');
const skapaKontaktKnapp = document.getElementById('skapaKontaktKnapp');
const kontakterUl = document.getElementById('kontakterUl');
const KontaktLista = document.getElementById('kontakter');
let felmeddelande = document.getElementById('felmeddelande');
let felmeddelande2 = document.getElementById('felmeddelande2');

// Händelse för klick på "Skapa kontakt"
skapaKontaktKnapp.addEventListener('click', function (){
    const namn = namnInput.value;
    const telefonnummer = telefonnummerInput.value;

    if (namn && telefonnummer) {
        skapaKontakt();
        namnInput.value = ""; 
        telefonnummerInput.value = "";
        felmeddelande.innerHTML = "";
    } else {
        felmeddelande.innerHTML = 'Båda fälten måste fyllas i för att en kontakt ska kunna skapas!';
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

    const ursprungligtNamn = namn.value;
    const ursprungligtTelefonnummer = telefonnummer.value;

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
    
    //--------------------Redigerar kontakt--------------------
    redigeraBtn.addEventListener('click', redigeraKontakt);
    function redigeraKontakt(){
        if (redigeraBtn.innerText==="Redigera"){
        namnLista.disabled=false
        nummerLista.disabled=false 
        redigeraBtn.innerText="Spara";
        }
        else {
            const nyttNamn = namnLista.value;
            const nyttTelefonnummer = nummerLista.value;

            if (nyttNamn && nyttTelefonnummer) {
                felmeddelande2.innerHTML = "";
                namnLista.disabled=true
                nummerLista.disabled=true
                redigeraBtn.innerText="Redigera"; 
            } else {
                felmeddelande2.innerHTML = 'Båda fälten måste fyllas i innan en redigerad kontakt kan sparas!';
            }
            // if (nyttNamn === "" || nyttTelefonnummer ===""){
            // felmeddelande2.innerHTML = 'Båda fälten måste fyllas i innan du kan spara!';

            // } else {
            // namnLista.disabled=true
            // nummerLista.disabled=true 
            // redigeraBtn.innerText="Redigera";
            // ursprungligtNamn = nyttNamn;
            // ursprungligtTelefonnummer = nyttTelefonnummer;
            // felmeddelande2.innerHTML = '';
            // }

        }
    }
    //------------------Raderar alla kontakter-----------------
    let raderaAlltBtn = document.getElementById('raderaAlltBtn');
    raderaAlltBtn.addEventListener('click', radera);
    //     //Visa bekräftelsemeddelande
    //     let arDuSaker = confirm('Är du säker på att du vill radera alla kontakter?');
    // });
          
}
function radera(){
    const arDuSaker = confirm(`Är du säker på att du vill radera alla kontakter? Denna åtgärd går ej att ångra.`);
    if(arDuSaker){
        document.getElementById("kontakterUl").innerHTML= "";
        return;
    }

}