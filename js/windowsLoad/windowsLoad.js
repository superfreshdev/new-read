console.log('### windowsLoad');

/* ---------------------------------------------------------------------------------------------- */
/* Event | Window Load 
/* ---------------------------------------------------------------------------------------------- */

window.addEventListener( 'load' , ()=> {


    /* ---------------------------------------------- */
    /* Step 0 - Reset Chapter Select Sets by default
    /* ---------------------------------------------- */

    newChapterIndex = []

    // Set all Chapter Items with default Index 0 als Value 
    for( let i=0; i < lblCategoryItems.length; i++ ) {

        newChapterIndex.push( 0 ) 
    }
    
    /* ---------------------------------------------- */
    /* Step 1 - Set Default Content
    /* ---------------------------------------------- */

    // set checked radio for category
    setRadioChecked( radioCategoryContents , newCatgegoryIndex ) 
    // setRadioChecked( radioChapterConents , newChapterIndex ) 

    // set content by checked category & chapter
    // ( chapter radio will be dynamically create and set default index 0 )
    setContent( newCatgegoryIndex , newChapterIndex[ 0 ] )     
    
})



