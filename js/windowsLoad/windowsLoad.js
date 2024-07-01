console.log('### windowsLoad');

/* -------------------------------------------------------------- */
/* DOM Elements 
/* -------------------------------------------------------------- */

// header 
const navHeaderSelect = document.getElementById('nav-header-select');
const vcc = document.getElementById('vcc')

var valueHeightNavHeaderSelect = 0;
// 14 = 14px of body-container , row-gap
var fixRowGap = 14;
valueHeightNavHeaderSelect = (valueHeightNavHeaderSelect - fixRowGap);


window.addEventListener( 'load' , ()=> {


    /* ------------------------------------------------------ */
    /* Set Height | Nav Header Select
    /* ------------------------------------------------------ */
    valueHeightNavHeaderSelect-=getHeightOfIdElement( navHeaderSelect )

    vcc.style.transform = `translateY(${ valueHeightNavHeaderSelect }px)`;

    
})