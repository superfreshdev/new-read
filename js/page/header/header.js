console.log('### header.js')

/* ------------------------------------------------------------------- */
/* DOM Elements | Header 
/* ------------------------------------------------------------------- */   

const chkNavHeader = document.getElementById('chk-header-nav');

/* ------------------------------------------------------------------- */
/* Change | Checked/unchecked | slide in/out nav header select
/* ------------------------------------------------------------------- */   

chkNavHeader.addEventListener( 'change' , ()=> {

    // console.log("clicked (chkNav)")

    selectListItemsContentCategory.classList.toggle('hide');


})

/* ------------------------------------------------------------------- */
/* Click | Label Select Items | Category Content
/* ------------------------------------------------------------------- */  

for( let i=0; i < lblCategoryItems.length; i++ ) {

    lblCategoryItems[i].addEventListener( 'click' , ()=> {

        // console.log('## clicked ## - Category Item')

        /* --------------------------------------------- */
        // Step 1 - Set New Category Index by clicked index
        /* --------------------------------------------- */
        newCatgegoryIndex = i;

        setContent( i ,  newChapterIndex[i] )

        /* --------------------------------------------- */
        // Step 2 - Close Select List & Img Arrow
        /* --------------------------------------------- */

        selectListItemsContentCategory.classList.toggle('hide');

        // unshow hamburger icon again
        chkNavHeader.checked = false;

       
    } )
}
