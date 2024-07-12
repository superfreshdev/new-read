console.log('### main.js')

/* ------------------------------------------------------------------- */
/* DOM Elements | Main 
/* ------------------------------------------------------------------- */   

/* ------------------------------------------------------------------- */
/* Click | Selected Item | Category Content 
/* ------------------------------------------------------------------- */  
selectedItemContentChapter.addEventListener( 'click' , ()=> {

    // console.log("clicked (selected item)")

    selectListItemsContentChapter.classList.toggle('hide');
    imgArrowSelectedItemContentChapter.classList.toggle('img-arrow-open');

})
