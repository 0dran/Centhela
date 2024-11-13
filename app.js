//Elementos del DOM que necesito
const intro=document.querySelector('.intro');
const beginBtn=document.querySelector('.begin').childNodes[0];
const next=document.querySelector('.next');
var options=document.getElementsByClassName("opt");
const description=document.querySelector('.description');
const optionsCont=document.querySelector(".options");
const form=document.querySelector(".form");
const question=document.querySelector(".question");
const results=document.querySelector(".results");
var img=document.querySelectorAll("img");
var nameFlower=document.getElementsByClassName("name");

//Variables de funcionalidad
let counter=0;
let selected=false;

//Funciones
//Fade intro
function FadeIntro(){
    intro.classList.add("fadeIntro")
    setTimeout(function(){
        intro.style.display="none";
        form.classList.remove("invisible");
        form.classList.add("appear");
    },1000);

}

function Change(){
    switch(counter){
        case 1:
            //Reacomodar las opciones para que sean 4
            optionsCont.style.width="130%";
            options[3].classList.remove("fourth");
            options[3].classList.add("opt");

            //Cambiar el contenido
            question.innerHTML="¿Qué emoción te gustaría que floreciera en su corazón cuando reciba este ramo?"

            options[0].innerHTML="Amor";
            options[1].innerHTML="Alegría";
            options[2].innerHTML="Nostalgia";
            options[3].innerHTML="Perdón";
            break;

        case 2:
            //Cambiar el contenido
            question.innerHTML="Si tuvieras que retratar a esa persona especial como una estación del año, ¿Cuál sería?"

            options[0].innerHTML="Primavera";
            options[1].innerHTML="Verano";
            options[2].innerHTML="Otoño";
            options[3].innerHTML="Invierno";
            break;
        
        case 3:
            form.style.display="none";
            results.style.display="block";
            results.classList.add("show-results");
            break;
    }

    description.innerHTML='';
}

//Event Listeners
//Fade Intro
beginBtn.addEventListener("mouseup", FadeIntro);

//Select option
Array.from(options).forEach(function(opt) {
    opt.addEventListener('mouseup', function(){
        for (var i = 0; i < options.length; i++) { //Desactiva todas las cajas
            options[i].classList.remove("selected-option");
        }
        opt.classList.add("selected-option"); //Activa la caja seleccionada

        //Identifica la opción seleccionada y cambia la descripción
        switch(counter){
            case 0:
                if(opt==options[0]){
                    description.innerHTML="Como esa mirada que lo dice todo sin necesidad de palabras.";
                    img[0].src="assets/Rosa-Sonrisa.jpg";
                    nameFlower[0].innerHTML="Rosa Sonrisa";
                }else if(opt==options[1]){
                    description.innerHTML="Un lazo irrompible que crececon el tiempo.";
                    img[0].src="assets/Armonia-Calida1.jpg";
                    nameFlower[0].innerHTML="Armonía Cálida";
                }else if(opt==options[2]){
                    description.innerHTML="Porque juntos convierten lo cotidiano en algo extraordinario con una sola sonrisa.";
                    img[0].src="assets/Sueno-rosa.jpg";
                    nameFlower[0].innerHTML="Sueño Rosa";
                }
                break;

            case 1:
                if(opt==options[0]){
                    description.innerHTML="Un amor profundo que se despliega como los pétalos al sol, envolviendo su corazón, calidez y ternura.";
                    img[1].src="assets/Encanto-Sereno.jpg";
                    nameFlower[1].innerHTML="Encanto Sereno";
                }else if(opt==options[1]){
                    description.innerHTML="Una alegría radiante que brota desde lo más profundo, como un jardín en plena primavera, llenando su día de luz y color.";
                    img[1].src="assets/Reconcilio-Floral.jpg";
                    nameFlower[1].innerHTML="Reconcilio Floral";
                }else if(opt==options[2]){
                    description.innerHTML="Una suave nostalgia que le susurre recuerdos de tiempos compartidos,como un viento que acaricia las hojas en otoño.";
                    img[1].src="assets/Recuerdos-Florales.jpg";
                    nameFlower[1].innerHTML="Recuerdos Florales";
                }else if(opt==options[3]){
                    description.innerHTML="Un perdón silecioso que florezca con suavidad como la brisa que disipa las nubes y abre paso a un nuevo amanecer.";
                    img[1].src="assets/Renacer-en-Blanco.jpg";
                    nameFlower[1].innerHTML="Renacer en Blanco";
                }
                break;
            
            case 2:
                if(opt==options[0]){
                    description.innerHTML="Una persona radiante, donde cada día es un lienzo en blanco que invita a soñar. Su esencia es refrescante, como el rocío sobre las flores, llenando el aire con promesas de renovación.";
                    img[2].src="assets/Esplendeor-Primaveral.jpg";
                    nameFlower[2].innerHTML="Esplendor Primaveral";
                }else if(opt==options[1]){
                    description.innerHTML="Una persona llena de energía, como el canto alegre de las olas rompiendo en la orilla. Su risa es contagiosa, y su espíritu aventurero invita a explorar el mundo, creando recuerdos que brillan como el sol.";
                    img[2].src="assets/Brisa-Pasion.jpg";
                    nameFlower[2].innerHTML="Brisa de Pasión";
                }else if(opt==options[2]){
                    description.innerHTML="Una persona melancólica, donde los suaves susurros del viento llevan consigo historias del pasado. Su presencia es reconfortante, como una taza de té caliente en un día fresco, llenando el corazón de calidez y refelxión.";
                    img[2].src="assets/Elegancia-Carmesi.jpg";
                    nameFlower[2].innerHTML="Elegancia Carmesí";
                }else if(opt==options[3]){
                    description.innerHTML="Una persona mágica donde la calma se siente como una manta que abraza el alma. Su cariño es como la nieve que cae suavemente, trayendo paz y un sentido de hogar en cada momento compartido.";
                    img[2].src="assets/Pureza-Invernal.jpg";
                    nameFlower[2].innerHTML="Pureza Invernal";
                }
                break;
        }
        
        selected=true;
    });
});

//Next
next.addEventListener("mouseup", function(){
    if(selected){
        form.classList.remove("appear");
        ++counter; //Elevar elcounter
        console.log(counter);
        
        form.classList.add("next-question"); //Animación de desaparición

        setTimeout(function(){
            for (var i = 0; i < options.length; i++) { //Desactiva todas las cajas
                options[i].classList.remove("selected-option");
            }
        }, 350);

        //Cambia el form
        setTimeout(Change,500);

        //Resetear animación
        setTimeout(function(){
            form.classList.remove("next-question");
        },1000);

        selected=false;
    }
});