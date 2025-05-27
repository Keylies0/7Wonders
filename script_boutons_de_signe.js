const td_liste = document.querySelectorAll( ".score" );



/**
 * Change le signe du bouton.
 * @param le bouton
 * @param l'input
 */
function changer_signe( bouton, input, parag )
  {
    if ( bouton.textContent === "+" )
      {
        bouton.textContent = "‒";
        parag.textContent = "‒";
      }
    else
      {
        bouton.textContent = "+";
        parag.textContent = "";
      }
  }

/**
 * Fait disparaitre le bouton, et reajuste les proportions.
 * @param le bouton
 * @param l'input
 */
function disparaitre( bouton, input, parag )
  {
    bouton.style.display = "none";
    parag.style.display = "";
  }

/**
 * Fait apparaitre le bouton, et reajuste les proportions.
 * @param le bouton
 * @param l'input
 */
function apparaitre( bouton, input, parag )
  {
    bouton.style.display = "";
    parag.style.display = "none";
  }



// Faire disparaitre tous les boutons et ajouter les EventListener
for ( td of td_liste )
  {
    const button = td.querySelector( ".signe" );
    const input  = td.querySelector( "input" );
    const parag  = td.querySelector( ".textesigne" );
    disparaitre( button, input, parag );
    
    button.addEventListener(
        "pointerdown",
        (e) => { 
            e.preventDefault();
            input.focus();
            changer_signe( button, input, parag );
        }
    );
    
    input.addEventListener(
        "focus",
        () => { apparaitre( button, input, parag ); }
    );
    
    input.addEventListener(
        "blur",
        () => { disparaitre( button, input, parag ); }
    );
  }
