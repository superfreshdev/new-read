console.log('### my-lib.js')


/* -------------------------------------------------------- */
/* Set & Reset Radio Index 
/* -------------------------------------------------------- */

function setRadioChecked( radioElements , setIndex ) {

    radioElements[setIndex].checked = true;
}

function resetRadioChecked( radioElements , setIndex ) {

    radioElements[setIndex].checked = false;
}


/* -------------------------------------------------------- */
/* Get Setted Radio Index 
/* -------------------------------------------------------- */

function getRadioSettedIndex( radioElements ) {

    for( let i=0; i < radioElements.length; i++ ) {

        if( radioElements[i].checked == true ) {
            return i;
        }
    }

    return null;
}




















/* ---------------------------------------------------------- */
/* Layout
/* ---------------------------------------------------------- */


function getHeightOfIdElement( idElement ) {

    // value as pixel
    return idElement.clientHeight;
}