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

    console.log( " windows Load = [navHeaderSelect | Height ] = " + valueHeightNavHeaderSelect )

    valueHeightNavHeaderSelect-=getHeightOfIdElement( navHeaderSelect )

    console.log( " windows Load = [navHeaderSelect | Height ] = " + valueHeightNavHeaderSelect )

    mainBody.style.transform = `translateY(${ valueHeightNavHeaderSelect }px)`;

   
    // delte 14px of row gap of body-container , we dont need it 

    // valueHeightNavHeaderSelect = Math.abs( (valueHeightNavHeaderSelect + 14) );
    // console.log( " windows Load = [navHeaderSelect | Height ] = " + valueHeightNavHeaderSelect )

    // must be calced and test it the px value
    // calced +1px ( browser bug calc )

    // mainBody.style.height = `calc(100% + 169px)`;
  
    
})