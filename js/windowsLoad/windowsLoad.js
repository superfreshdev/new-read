console.log('### windowsLoad');

/* ---------------------------------------------------------------------------------------------- */
/* DOM Elements 
/* ---------------------------------------------------------------------------------------------- */

/* -------------------------------------------------- */
/* Header | Title Container
/* -------------------------------------------------- */

const headerTitleContainer = document.getElementById('title-header-container');



/* -------------------------------------------------- */
/* Custom Select | Category Content 
/* -------------------------------------------------- */

var newCatgegoryIndex = 0;

// radio
const radioCategoryContents = document.querySelectorAll('#js-custom-select-content-category input')

// select list 
const selectListItemsContentCategory = document.getElementById('js-custom-select-content-category');

// labels of select list 
const lblCategoryItems = selectListItemsContentCategory.querySelectorAll('.lbl-select-item-custom')

/* -------------------------------------------------- */
/* Custom Select | Chapter Content 
/* -------------------------------------------------- */

var newChapterIndex = 0;

// radio
const radioChapterConents = document.querySelectorAll('#js-custom-select-content-chapter input')

// selected item 
const selectedItemContentChapter = document.getElementById('js-selected-item-content-chapter')
const imgArrowSelectedItemContentChapter = document.getElementById('js-img-arrow-selected-item-content-chapter');

// select list 
const selectListItemsContentChapter = document.getElementById('js-select-list-content-chapter');

// labels of select list 
const lblChapterItems = selectListItemsContentChapter.querySelectorAll('.lbl-select-item-custom')



/* -------------------------------------------------- */
/* Event | Window Load 
/* -------------------------------------------------- */

window.addEventListener( 'load' , ()=> {


    /* ---------------------------------------------- */
    /* Step 1 - Set Default Content
    /* ---------------------------------------------- */
    setRadioChecked( radioCategoryContents , newChapterIndex ) 
    setRadioChecked( radioChapterConents , newChapterIndex ) 


    // console.log( 'radioCategoryContents = ' + radioCategoryContents[0].checked )
    // console.log( 'radioChapterConents = ' + radioChapterConents[0].checked )

    // Update View - Header Title ( Category Info )
    updateViewHeaderTitle( headerTitleContainer ,
        lblCategoryItems[newCatgegoryIndex].querySelector('img').getAttribute('src') ,
        lblCategoryItems[newCatgegoryIndex].querySelector('div:nth-of-type(1)').innerText , 
        categorySubTitles[newCatgegoryIndex] )


    // Update View - Selected Item ( Chapter Info )
    updateViewSelectedItemContentChapter( selectedItemContentChapter ,
        lblChapterItems[newChapterIndex].querySelector('img').getAttribute('src'),
        lblChapterItems[newChapterIndex].querySelector('img').getAttribute('class'),
        lblChapterItems[newChapterIndex].querySelector('div:nth-of-type(1)').innerText , 
        lblChapterItems[newChapterIndex].querySelector('.chapter-content-entry').innerText
     )
    
})









/* ------------------------------------------------------------- */
/* Update View | Selected Item ( Custom Select )
/* ------------------------------------------------------------- */

function updateViewSelectedItemContentChapter( idSelected ,  srcIcon , classIcon,  chapterTitle , countElements ) {

    // Set's 
    idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'src' , srcIcon )
    idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'class' , classIcon )

    idSelected.querySelector('.title-select-item-custom > div:nth-of-type(1)').innerText = chapterTitle + " " + countElements;
   

}


/* ------------------------------------------------------------- */
/* Update View | Header Title 
/* ------------------------------------------------------------- */

function updateViewHeaderTitle( idHeader , srcIcon , categoryTitle, subTitle ) {

    
    // Set's 
    idHeader.querySelector('#left-img-header-container > img').setAttribute( 'src' , srcIcon )
    // idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'class' , classIcon )

    idHeader.querySelector('#header-content-category-title').innerText = categoryTitle;

    idHeader.querySelector('#header-content-category-description').innerText = subTitle;
    

}