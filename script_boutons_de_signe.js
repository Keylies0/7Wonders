const td_liste = document.querySelectorAll( ".score" );



/**
 * Change le signe du bouton.
 * @param le bouton
 * @param l'input
 */
function changer_signe( bouton, input )
  {
    if ( bouton.textContent === "+" )
        bouton.textContent = "‒";
    else
        bouton.textContent = "+";
  }

/**
 * Fait disparaitre le bouton, et reajuste les proportions.
 * @param le bouton
 * @param l'input
 */
function disparaitre( bouton, input )
  {
    bouton.style.display = "none";
    input.style.width = "100%";
  }

/**
 * Fait apparaitre le bouton, et reajuste les proportions.
 * @param le bouton
 * @param l'input
 */
function apparaitre( bouton, input )
  {
    bouton.style.display = "";
    input.style.width = "70%";
  }



// Faire disparaitre tous les boutons et ajouter les EventListener
for ( td of td_liste )
  {
    const button = td.querySelector( ".signe" );
    const input  = td.querySelector( "input" );
    disparaitre( button, input );
    
    button.addEventListener(
        "pointerdown",
        (e) => { 
            e.preventDefault();
            input.focus();
            changer_signe( button, input );
        }
    );
    
    input.addEventListener(
        "focus",
        () => { apparaitre( button, input ); }
    );
    
    input.addEventListener(
        "blur",
        () => { disparaitre( button, input ); }
    );
  }
