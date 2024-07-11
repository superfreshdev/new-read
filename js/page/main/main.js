console.log('### main.js')


/* ------------------------------------------------------------------- */
/* DOM Elements | Main 
/* ------------------------------------------------------------------- */   



/* ------------------------------------------------------------------- */
/* Click | Selected Item | Category Content 
/* ------------------------------------------------------------------- */  
selectedItemContentChapter.addEventListener( 'click' , ()=> {

    console.log("clicked (selected item)")

    selectListItemsContentChapter.classList.toggle('hide');
    imgArrowSelectedItemContentChapter.classList.toggle('img-arrow-open');

})

/* ------------------------------------------------------------------- */
/* Click | Label Select Items | Category Content
/* ------------------------------------------------------------------- */  

// for( let i=0; i < lblCategoryItems.length; i++ ) {

//     lblCategoryItems[i].addEventListener( 'click' , ()=> {

        

//         // Step 0 - Open Select List & Change Img Arrow View
       
//         // newCatgegoryIndex = i;

//         // // Step 2 - Set clicked new chapter
//         // updateViewSelectedItemContentChapter( selectedItemContentChapter ,
//         // lblChapterItems[i].querySelector('img').getAttribute('src') ,
//         // lblChapterItems[i].querySelector('img').getAttribute('class'),
//         // lblChapterItems[i].querySelector('div:nth-of-type(1)').innerText , 
//         // lblChapterItems[i].querySelector('.chapter-content-entry').innerText )

//         // // Step 3 - Set new chapter index 
//         // setRadioChecked( radioChapterConents , i ) 
       

//         // Step 4 - Close Select List & Img Arrow
//         selectListItemsContentChapter.classList.toggle('hide');
//         imgArrowSelectedItemContentChapter.classList.toggle('img-arrow-open');

//         // Step 5 - Set Content 
        
       
//     } )
// }


// console.log( 'L= ' + lblChapterItems.length )






// getRadioSettedIndex
// const radioCategoryContents = document.querySelectorAll('#custom-select-content-category input')
// const radioChapterConents = document.querySelectorAll('#custom-select-content-chapter input')

/* -------------------------------------------------------- */
/* Default Category & Chapter Set 
/* -------------------------------------------------------- */

// Index 0 , 0 