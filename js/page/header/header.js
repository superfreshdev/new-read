console.log('### header.js')


/* ------------------------------------------------------------------- */
/* DOM Elements | Header 
/* ------------------------------------------------------------------- */   

const chkNavHeader = document.getElementById('chk-header-nav');

const mainBody = document.getElementById('main-body');
const navHeaderSelectContainer = document.getElementById('nav-header-select-container');

const navHeaderSelect = document.getElementById('nav-header-select');

const selectCategory = document.getElementById('custom-select-content-category');



/* ------------------------------------------------------------------- */
/* Change | Checked/unchecked | slide in/out nav header select
/* ------------------------------------------------------------------- */   

chkNavHeader.addEventListener( 'change' , ()=> {

    if( chkNavHeader.checked == true ) {

        // console.log("Panel = " + panel.clientHeight)

        // panel.style.height = 'auto';

        selectCategory.style.maxHeight = selectCategory.scrollHeight + "px";
        selectCategory.style.marginBottom = '12px';

        // navHeaderSelectContainer.style.display = 'flex';

        // navHeaderSelect.style.height = 'auto';

        // navHeaderSelect.style.marginBottom = '12px';


        /* ----------------------------------------------------- */
        /* Update - Main Body View 
        /* ----------------------------------------------------- */

        // mainBody.style.grid = 'auto 1fr / 1fr';

        /* ----------------------------------------------------- */
        /* Update - Nav Header Select View 
        /* ----------------------------------------------------- */

        // navHeaderSelect.style.position = 'relative';
        
        // navHeaderSelect.style.left = 'auto';
        // navHeaderSelect.style.right = 'auto';

        // navHeaderSelect.style.transform = 'translateY(0px)';

       

    } else {

        selectCategory.style.maxHeight = '0px';
        selectCategory.style.marginBottom = '0px';

        // navHeaderSelectContainer.style.display = 'none';
        // navHeaderSelectContainer.style.height = '0em';
        
        /* ----------------------------------------------------- */
        /* Update - Main Body View 
        /* ----------------------------------------------------- */

        // mainBody.style.grid = '1fr / 1fr';

        /* ----------------------------------------------------- */
        /* Update - Nav Header Select View 
        /* ----------------------------------------------------- */

        // navHeaderSelect.style.position = 'absolute';
        // navHeaderSelect.style.left = '12px';
        // navHeaderSelect.style.right = '12px';

        // navHeaderSelect.style.transform = 'translateY(-500px)';
       
       
       
    }

 
})
