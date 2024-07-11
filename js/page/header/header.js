console.log('### header.js')

/* ------------------------------------------------------------------- */
/* DOM Elements | Header 
/* ------------------------------------------------------------------- */   

const chkNavHeader = document.getElementById('chk-header-nav');
const selectCategory = document.getElementById('custom-select-content-category');




/*

    meine top 15 Gerichte 
    rein vegetarische Gerichte 

    englisch , spanisch 
    französisch, portugisisch 
    türkisch , arabisch , grichisch
    südkoranisch , japanisch , polnisch , italenisch 

    merken , kopfrechnen 

    musik - griechisch ....

    geige - thoerie , praxis , tutorial seiten 

    js spiele , memomry , running man , pinball 

    software projekte - memory , angular , angular , angular , java , java 

    tech tutorials - web , software , backend , tech tools 

    über mich - 

    kurz über mich 10 sek

    mein Skills 

    meine aktuellen to dos 


*/

/* ------------------------------------------------------------------- */
/* Change | Checked/unchecked | slide in/out nav header select
/* ------------------------------------------------------------------- */   

chkNavHeader.addEventListener( 'change' , ()=> {

    console.log("clicked (chkNav)")

    selectListItemsContentCategory.classList.toggle('hide');


})

/* ------------------------------------------------------------------- */
/* Click | Label Select Items | Category Content
/* ------------------------------------------------------------------- */  

for( let i=0; i < lblCategoryItems.length; i++ ) {

    lblCategoryItems[i].addEventListener( 'click' , ()=> {

        console.log(' clicked - lblCategoryItems')

        setContent( i , 0 )

        // // Step 0 - Open Select List & Change Img Arrow View
       
        // newCatgegoryIndex = i;

        // // Step 2 - Set clicked new chapter
        // updateViewHeaderTitle( headerTitleContainer ,
        //     lblCategoryItems[i].querySelector('img').getAttribute('src') ,
        //     lblCategoryItems[i].querySelector('div:nth-of-type(1)').innerText , 
        //     categorySubTitles[i] )

        // // Step 3 - Set new chapter index 
        // setRadioChecked( radioCategoryContents , i ) 
       

        // // Step 4 - Close Select List & Img Arrow
        selectListItemsContentCategory.classList.toggle('hide');

        // // show hamburger icon again
        chkNavHeader.checked = false;

        // // Step 5 - Set Content 
        // updatePageList( i )

       
    } )
}




























  // if( chkNavHeader.checked == true ) {

    //     // console.log("Panel = " + panel.clientHeight)

    //     selectCategory.style.maxHeight = selectCategory.scrollHeight + "px";
    //     selectCategory.style.marginBottom = '12px';

    // } else {

    //     selectCategory.style.maxHeight = '0px';
    //     selectCategory.style.marginBottom = '0px';       
       
    // }
