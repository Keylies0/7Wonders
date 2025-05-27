const NB_JOUEURS = 7;
const TITRES = [
    "nom",
    "merveille",
    "tresor_participations_dettes",
    "militaires",
    "bleues",
    "jaunes",
    "vertes",
    "violettes",
    "noires",
    "leaders",
    "maritimes",
    "iles",
    "total",
];
const CORPS_CARNET = document.getElementById( "corps_carnet" );



/**
 * Cree les elements du carnet de score (images, boutons de signes, champs de
 * saisie) avec des attributs utiles pour les calculs des totaux.
 */
function creer_carnet()
  {
    let i = 0;
    
    CORPS_CARNET.appendChild( creer_titre_nom( TITRES[i] ) );
    
    i++
    for ( ; i < TITRES.length - 1; i++ )
      {
        CORPS_CARNET.appendChild( creer_titre( TITRES[i] ) );
      }
    
    CORPS_CARNET.appendChild( creer_titre_total_1re( TITRES[i] ) );
    CORPS_CARNET.appendChild( creer_titre_total_2de( TITRES[i] ) );
  }

/**
 * Cree les elements de la ligne des noms.
 * @param le titre de la ligne a creer.
 * @return le <tr> de la ligne des noms.
 */
function creer_titre_nom( titre_nom )
  {
    const tr  = document.createElement( "tr" );
    const td  = document.createElement( "td" );
    const img = document.createElement( "img" );
    
    img.setAttribute( "src", `images/${titre_nom}.svg` );
    
    td.appendChild( img );
    tr.appendChild( td );
    
    for ( let i = 0; i < NB_JOUEURS; i++ )
      {
        const td = document.createElement( "td" );
        td.setAttribute( "class", `j${i} ${titre_nom}` );
        
        const input = document.createElement( "input" );
        input.setAttribute( "type", "text" );
        
        td.appendChild( input );
        tr.appendChild( td );
      }
    
    return tr;
  }

/**
 * Cree les elements de la ligne du titre.*
 * @param le titre de la ligne a creer.
 * @return le <tr> de la ligne du titre.
 */
function creer_titre( titre )
  {
    const tr  = document.createElement( "tr" );
    const td  = document.createElement( "td" );
    const img = document.createElement( "img" );
    
    img.setAttribute( "src", `images/${titre}.svg` );
    
    td.appendChild( img );
    tr.appendChild( td );
    
    for ( let i = 0; i < NB_JOUEURS; i++ )
      {
        const td = document.createElement( "td" );
        td.setAttribute( "class", `j${i} ${titre} score` );
        
        const button = document.createElement( "button" );
        button.setAttribute( "class", "signe" );
        button.textContent = "+";
        
        const parag = document.createElement( "p" );
        parag.setAttribute( "class", "textesigne" );
        
        const input = document.createElement( "input" );
        input.setAttribute( "type", "number" );
        
        td.appendChild( button );
        td.appendChild( parag );
        td.appendChild( input );
        tr.appendChild( td );
      }
    
    return tr;
  }

/**
 * Cree les elements de la 1re ligne des totaux.
 * @param le titre de la ligne a creer.
 * @return le <tr> de la 1re ligne des totaux.
 */
function creer_titre_total_1re( titre_total )
  {
    const tr  = document.createElement( "tr" );
    const td  = document.createElement( "td" );
    const img = document.createElement( "img" );
    
    td.setAttribute( "rowspan", "2" );
    img.setAttribute( "src", `images/${titre_total}.svg` );
    
    td.appendChild( img );
    tr.appendChild( td );
    
    for ( let i = 0; i < NB_JOUEURS; i++ )
      {
        const td = document.createElement( "td" );
        td.setAttribute( "class", `j${i} ${titre_total} individuel` );
        
        tr.appendChild( td );
      }
    
    return tr;
  }

/**
 * Cree les elements de la 2de ligne des totaux.
 * @param le titre de la ligne a creer.
 * @return le <tr> de la 2de ligne des totaux.
 */
function creer_titre_total_2de( titre_total )
  {
    const tr = document.createElement( "tr" );
    
    for ( let i = 0; i < Math.floor( NB_JOUEURS / 2 ); i++ )
      {
        const td = document.createElement( "td" );
        td.setAttribute( "colspan", "2" );
        td.setAttribute( "class", `j${2*i} j${2*i + 1} ${titre_total} equipe` );
        
        tr.appendChild( td );
      }
    
    return tr;
  }



creer_carnet();
