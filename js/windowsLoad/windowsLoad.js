console.log('### windowsLoad');

/* ---------------------------------------------------------------------------------------------- */
/* DOM Elements 
/* ---------------------------------------------------------------------------------------------- */

/* ---------------------------------------------- */
/* header 
/* ---------------------------------------------- */

const navHeaderSelect = document.getElementById('nav-header-select');
const mainBody = document.getElementById('main-body')

var valueHeightNavHeaderSelect = 0;
// 14 = 14px of body-container , row-gap
var fixRowGapBodyContainer = 14;
valueHeightNavHeaderSelect = ( valueHeightNavHeaderSelect - fixRowGapBodyContainer );

/* ---------------------------------------------- */
/* ...
/* ---------------------------------------------- */

window.addEventListener( 'load' , ()=> {


    /* ------------------------------------------------------ */
    /* Set Height | Nav Header Select
    /* ------------------------------------------------------ */
    valueHeightNavHeaderSelect-=getHeightOfIdElement( navHeaderSelect )
    mainBody.style.transform = `translateY(${ valueHeightNavHeaderSelect }px)`;

    
})