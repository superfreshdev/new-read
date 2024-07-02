console.log('### header.js')


/* ------------------------------------------------------------------- */
/* DOM Elements | Header 
/* ------------------------------------------------------------------- */   

const chkNavHeader = document.getElementById('chk-header-nav');





/* ------------------------------------------------------------------- */
/* Change | Checked/unchecked | slide in/out nav header select
/* ------------------------------------------------------------------- */   

chkNavHeader.addEventListener( 'change' , ()=> {

    console.log( " clientHeight = " + valueHeightNavHeaderSelect + "px")

    if( chkNavHeader.checked == true ) {

       
        mainBody.style.transform = "translateY(0%)"

        // navHeaderSelect.style.backgroundColor = "brown";

       

    } else {

        mainBody.style.transform = `translateY(${ valueHeightNavHeaderSelect }px)`;
       
       
    }

 
})
