const TITRE_TOTAL = TITRES[TITRES.length - 1];
const calc_indi = document.querySelector( "#sommer_individuels" );
const calc_equi = document.querySelector( "#sommer_equipes" );
const reini_que = document.querySelector( "#reinitialiser" );
const oui_reini = document.querySelector( "#confirmer" );
const non_reini = document.querySelector( "#annuler" );
const question  = document.querySelector( "#confirmation" );

/**
 * Reinitialiser les scores et totaux (et les boutons de signe).
 * De-affiche le bouton de sommes des equipes.
 */
function reset()
  {
    for ( td of  td_liste )
      {
        const bouton = td.querySelector( ".signe" );
        const input  = td.querySelector( "input" );
        
        bouton.textContent = "+";
        input.value = "";
      }
    for ( td of document.querySelectorAll( `.${TITRE_TOTAL}` ) )
      {
        td.textContent = "";
      }
    calc_equi.style.display = "none";
    afficher_reinit();
  }

/**
 * Calcule les sommes individuels et les affiche.
 */
function sommer_individuels()
  {
    for ( let i = 0; i < NB_JOUEURS; i ++ )
      {
        const scores = document.querySelectorAll( `.j${i}.score` );
        let S = 0;
        for ( td of scores )
          {
            const bouton = td.querySelector( ".signe" );
            const input  = td.querySelector( "input" );
            
            if ( bouton.textContent === "‒" )
                S -= parseInt( input.value ) || 0;
            else
                S += parseInt( input.value ) || 0;
          }
        const total = document.querySelector( `.j${i}.${TITRE_TOTAL}.individuel` );
        total.textContent = String( S );
      }
    calc_equi.style.display = "";
  }

/**
 * Calcule les sommes des equipes et les affiche.
 */
function sommer_equipes()
  {
    for ( let i = 0; i < Math.floor( NB_JOUEURS / 2 ); i++ )
      {
        const score_j1 = document.querySelector( `.j${2*i}.${TITRE_TOTAL}.individuel` );
        const score_j2 = document.querySelector( `.j${2*i + 1}.${TITRE_TOTAL}.individuel` );
        const score_equipe = document.querySelector( `.j${2*i}.j${2*i + 1}.${TITRE_TOTAL}.equipe` );
        
        let S = parseInt( score_j1.textContent ) + parseInt( score_j2.textContent );
        score_equipe.textContent = String( S );
      }
  }

/**
 * Afficher boutons Oui Non et de-afficher bouton de reinitialisaton.
 */
function afficher_btn_oui_non()
  {
    reini_que.style.display = "none";
    question.style.display = "";
    oui_reini.style.display = "";
    non_reini.style.display = "";
  }

/**
 * Afficher reinitialisation et de-afficher oui non.
 */
function afficher_reinit()
  {
    reini_que.style.display = "";
    question.style.display = "none";
    oui_reini.style.display = "none";
    non_reini.style.display = "none"; 
  }



calc_indi.addEventListener( "click", sommer_individuels );
calc_equi.addEventListener( "click", sommer_equipes );
reini_que.addEventListener( "click", afficher_btn_oui_non );
oui_reini.addEventListener( "click", reset );
non_reini.addEventListener( "click", afficher_reinit );

afficher_reinit();
calc_equi.style.display = "none";
