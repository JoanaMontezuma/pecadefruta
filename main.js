

/*-----------------MODAL------------------------*/

// modal element
var modal = document.getElementById('simpleModal');
// modal button
var modalBtn = document.getElementById('modalBtn');
// modal close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// for open click 
modalBtn.addEventListener('click', openModal);
// for close click 
closeBtn.addEventListener('click', closeModal);


//function to open modal
function openModal(){
    modal.style.display = 'block';
}

//function to close modal
function closeModal(){
    modal.style.display = 'none';
}





/*----------------- custom-input------------------------*/



let peq, med, gra;
      let opt1, opt2, opt3;
      let col42;

      



      function init(){
          console.log("init")
        // options
        opt1 = document.querySelector(".custom-input option:nth-child(1)");
        opt2 = document.querySelector(".custom-input option:nth-child(2)");
        opt3 = document.querySelector(".custom-input option:nth-child(3)");
        col42 = document.getElementById("col-42");
        
        //buttons
        peq = document.getElementById("peq");

        med = document.getElementById("med");
        gra = document.getElementById("gra");

        peq.addEventListener("click",abrePeq);
        med.addEventListener("click",abreMed);
        gra.addEventListener("click",abreGra);
      }

      function abrePeq(){
        //remover o select
        removeSelect();
        opt1.setAttribute("selected","selected");
        irCol42();

      }
      
      function abreMed(){
          console.log ("abre med", opt2);
        //remover o select
        removeSelect();
        opt2.setAttribute("selected","selected");
        irCol42();

      }

      function abreGra(){
        //remover o select
        removeSelect();
        opt3.setAttribute("selected","selected");
        irCol42();

      }

      function removeSelect() {
        //remover o atribute
        opt1.removeAttribute("selected");
        opt2.removeAttribute("selected");
        opt3.removeAttribute("selected");
      }

      function irCol42() {
        let disTopo = col42.offsetTop;
        window.scrollTo({ top:disTopo, behavior:"smooth" });
      }



      /*----------------- button scrool to COMO FUNCIONA------------------------*/

    
const links = document.querySelectorAll(".botao-mais");
links.forEach((item)=>{
    item.addEventListener("click", ()=>{
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth", block:"center"});
    })
})

          






    
