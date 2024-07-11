console.log('### windowsLoad');

/* ---------------------------------------------------------------------------------------------- */
/* DOM Elements 
/* ---------------------------------------------------------------------------------------------- */


/* -------------------------------------------------- */
/* Header | Category Content Sub Titles
/* -------------------------------------------------- */

const headerTitleContainer = document.getElementById('title-header-container');

const categorySubTitles = [

    'die ich gelesen habe',
    'gesunde & coole Gerichte',
    'lernen',
    'trainieren & verbessern',
    'vom häufigen Gebrauch',
    'viel von mir gehörte',
    'lernen nach meinem Style',
    'von mir spielen',
    'von mir entwickelte',
    'von mir erstellte',
    'mehr erfahren'
]

/* -------------------------------------------------- */
/* Main | Chapter Items of Categories
/* -------------------------------------------------- */

const emojiPath = "media/img/emojies/";
const flagPath = "media/img/flag/";

const arrayChaptersOfCategories = [
    
    [
        ["emojie-eyes.png", "img-icon-big", "Aktuell am lesen","actually-reading"],
        ["emojie-plant.png", "img-icon-big", "Persönlichkeitsentwicklung","personality"],

        ["emoji-person.png", "img-icon-big", "Biografien","biografie"],
        ["emoji-arr.png", "img-icon-big", "Thriller","thriller"],

        ["emoji-stars.png", "img-icon-big", "Fantasy","fantasy"],
        ["gb-flag.png", "img-icon-b-medium", "Englisch","english"],

        ["emoji-loop.png", "img-icon-big","Andere","others"],

    ],

    [

        ["emojie-my-top-food.png", "img-icon-big", "Top Alltagsgerichte","my-top-food"],
        ["emojie-vegan.png", "img-icon-big", "Top vegetarische","my-vegan-food"]

    ] ,

    [

        ["gb-flag.png", "img-icon-big", "Englisch","english"],
        ["spain-flag.png", "img-icon-big", "Spanisch","spanish"],
        ["italian-flag.png", "img-icon-big", "Italenisch","italian"],
        ["france-flag.png", "img-icon-big", "Französisch","france"],
        ["greece-flag.png", "img-icon-big", "Griechisch","greece"],
        ["polska-flag.png", "img-icon-big", "Polnisch","polish"],
        ["turkey-flag.png", "img-icon-big", "Türkisch","turkish"],
        ["russia-flag.png", "img-icon-big", "Russisch","russian"],
        ["japan-flag.png", "img-icon-big", "Japanisch","japan"],
        ["south-corea-flag.png", "img-icon-big", "Südkoranisch","south-corean"],

    ] ,

    [

        ["emojie-nase-dampfend.png", "img-icon-big", "Merken","my-top-food"],
        ["emojie-gesicht-verzogen.png", "img-icon-big", "Kopfrechnen","my-vegan-food"]

    ] ,

    [

        ["emojie-earth.png", "img-icon-big", "Erdkunde","theory-earth"],
        ["emojie-dollar.png", "img-icon-big", "Finanzen","theory-finance"]

    ] ,


    [
        ["emojie-entspannend.png", "img-icon-big", "Meditation","south-corean"],
        ["gb-flag.png", "img-icon-big", "Englisch","english"],
        ["spain-flag.png", "img-icon-big", "Spanisch","spanish"],
        ["italian-flag.png", "img-icon-big", "Italenisch","italian"],
        ["france-flag.png", "img-icon-big", "Französisch","france"],
        ["greece-flag.png", "img-icon-big", "Griechisch","greece"],
        ["polska-flag.png", "img-icon-big", "Polnisch","polish"],
        ["turkey-flag.png", "img-icon-big", "Türkisch","turkish"],
        ["russia-flag.png", "img-icon-big", "Russisch","russian"],
        ["japan-flag.png", "img-icon-big", "Japanisch","japan"],
        ["south-corea-flag.png", "img-icon-big", "Südkoranisch","south-corean"],   

    ],

    [

        ["emojie-nase-dampfend.png", "img-icon-big", "Theorie","theory"],
        ["emoji-cool-sunglaesses.png", "img-icon-big", "Praxis","practice"]

    ] ,

    [

        ["emojie-hacker-icon.png", "img-icon-big", "Mini Games","theory"],
        ["emojie-alien.png", "img-icon-big", "Big Games","practice"]

    ] ,

    [

        ["emojie-doing-bundle.png", "img-icon-big", "Web Plattform","theory"],
        ["emojie-doing-bundle.png", "img-icon-big", "Java","practice"],
        ["emojie-doing-bundle.png", "img-icon-big", "KI - Data Science","practice"],
        ["emojie-doing-bundle.png", "img-icon-big", "DevOps","practice"]

    ] ,

    [

        ["emojie-book-blue.png", "img-icon-big", "Web Plattform","theory"],
        ["emojie-book-blue.png", "img-icon-big", "Java","practice"],
        ["emojie-book-blue.png", "img-icon-big", "Softare Qualitätssicherung","practice"],
        ["emojie-book-blue.png", "img-icon-big", "Tech Tools","practice"],
        ["emojie-book-blue.png", "img-icon-big", "KI - Data Science","practice"],
        ["emojie-book-blue.png", "img-icon-big", "DevOps","practice"]

    ] ,

    [

        ["me-zwinker.png", "img-icon-big", "Kurz zu mir","theory"],
        ["me-zwinker.png", "img-icon-big", "Meine Skills"],
        ["me-zwinker.png", "img-icon-big", "Weitere Eindrücke","practice"],

    ] ,

]


/* -------------------------------------------------- */
/* Main | Custom Select | Category Content 
/* -------------------------------------------------- */

var newCatgegoryIndex = 0;

// radio
const radioCategoryContents = document.querySelectorAll('#js-custom-select-content-category input')
// select list 
const selectListItemsContentCategory = document.getElementById('js-custom-select-content-category');
// labels of select list 
const lblCategoryItems = selectListItemsContentCategory.querySelectorAll('.lbl-select-item-custom')

/* -------------------------------------------------- */
/* Main | Custom Select | Chapter Content 
/* -------------------------------------------------- */

var newChapterIndex = 0;

// selected item 
const selectedItemContentChapter = document.getElementById('js-selected-item-content-chapter')
const imgArrowSelectedItemContentChapter = document.getElementById('js-img-arrow-selected-item-content-chapter');
// select list 
const selectListItemsContentChapter = document.getElementById('js-select-list-content-chapter');



/* -------------------------------------------------- */
/* Main | Page List 
/* -------------------------------------------------- */

const pageList = document.getElementById('page-list')






function checkAndRemoveExistElements( idElement, classSelector ) {

    if( idElement.hasChildNodes() ) {

        for( let i=0; i < idElement.querySelectorAll( classSelector ).length; i++ ) {
            
            idElement.removeChild( idElement.querySelector( classSelector )[i] )
            idElement.removeChild( idElement.querySelector( 'input' )[i] )

        }

        console.log( "### hat Child Nodes" )
  
    } else {

        console.log( "### hatte keine Child Nodes , heißt es wird erstellt" )
    }

    

}

//  checkAndRemoveExistElements( selectListItemsContentChapter , "lbl-select-item-custom" )






/* -------------------------------------------------- */
/* Event | Window Load 
/* -------------------------------------------------- */

window.addEventListener( 'load' , ()=> {


    /* ---------------------------------------------- */
    /* Step 1 - Set Default Content
    /* ---------------------------------------------- */

    // set radio for category & chapter content
    setRadioChecked( radioCategoryContents , newCatgegoryIndex ) 
    // setRadioChecked( radioChapterConents , newChapterIndex ) 


    // set content by checked category & chapter
    setContent( newCatgegoryIndex , newChapterIndex ) 

   

    // Update View - Header Title ( Category Info )
    // updateViewHeaderTitle( headerTitleContainer ,
    //     lblCategoryItems[newCatgegoryIndex].querySelector('img').getAttribute('src') ,
    //     lblCategoryItems[newCatgegoryIndex].querySelector('div:nth-of-type(1)').innerText , 
    //     categorySubTitles[newCatgegoryIndex] )


    // Update View - Selected Item ( Chapter Info )
    // updateViewSelectedItemContentChapter( selectedItemContentChapter ,
    //     lblChapterItems[newChapterIndex].querySelector('img').getAttribute('src'),
    //     lblChapterItems[newChapterIndex].querySelector('img').getAttribute('class'),
    //     lblChapterItems[newChapterIndex].querySelector('div:nth-of-type(1)').innerText , 
    //     lblChapterItems[newChapterIndex].querySelector('.chapter-content-entry').innerText
    // )

    // Set Content 
    // createSelectItemsOfSelectChapters( newCatgegoryIndex )

    
    
})


function getIdPrefixForChapterSelects( indexCategory ) {

    var strRadio = "radio";

    switch( indexCategory ) {

        case 0:
            return strRadio+="-book-";

        case 1:
            return strRadio+="-food-";

        case 2:
            return strRadio+="-language-";

        case 3:
            return strRadio+="-intelligence-";
    
        case 4:
            return strRadio+="-knowledge-";

        case 5:
            return strRadio+="-music-";

        case 6:
            return strRadio+="-violine-";

        case 7:
            return strRadio+="-js-games-";

        case 8:
            return strRadio+="-sf-projects-";

        case 9:
            return strRadio+="-tech-tutorials-";

        case 10:
            return strRadio+="-about-";
     
        default:
            console.log('[getIdPrefixForChapterSelects] - wrong index category given')
        
    }
        

}


/* ---------------------------------------------------------------------- */
/* Set | Content 
/* ---------------------------------------------------------------------- */

function setContent( indexCategory , indexChapter ) {

    /* ----------------------------------------------------------------- */
    /* Step 1 - Update Header Title 
    /* ----------------------------------------------------------------- */
    
    updateHeaderContent( headerTitleContainer , indexCategory )

    /* ----------------------------------------------------------------- */
    /* Step 2 - Create Chapter Select Items
    /* ----------------------------------------------------------------- */

    promiseCreateChapterSelectItems( indexCategory , indexChapter )

    // createChapterSelectItems( indexCategory )

    // Promise

    /* ----------------------------------------------------------------- */
    /* Step 3 - Set Chapter Default
    /* ----------------------------------------------------------------- */

    // setRadioChecked( radioChapterConents , newChapterIndex ) 

    /* ----------------------------------------------------------------- */
    /* Step 4 - Set Chapter Select Item 
    /* ----------------------------------------------------------------- */


}

function updateHeaderContent( idHeader , indexCategory ) {

    // Set Icon - Header
    idHeader.querySelector('#left-img-header-container > img').setAttribute( 'src' , lblCategoryItems[ indexCategory ].querySelector('img').getAttribute('src') )
    // Set Title - Header 
    idHeader.querySelector('#header-content-category-title').innerText = lblCategoryItems[ indexCategory ].querySelector('div:nth-of-type(1)').innerText;
    // Set Sub Title - Header 
    idHeader.querySelector('#header-content-category-description').innerText = categorySubTitles[ indexCategory ];
}

// radioCategoryContents , selectListItemsContentCategory

 // Set's 
 
 // idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'class' , classIcon )






/* ------------------------------------------------------------- */
/* Update View | Selected Item ( Custom Select )
/* ------------------------------------------------------------- */

// function updateViewSelectedItemContentChapter( idSelected ,  srcIcon , classIcon,  chapterTitle , countElements ) {

//     // Set's 
//     idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'src' , srcIcon )
//     idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'class' , classIcon )

//     idSelected.querySelector('.title-select-item-custom > div:nth-of-type(1)').innerText = chapterTitle + " " + countElements;
   

// }


/* ------------------------------------------------------------- */
/* Update View | Header Title 
/* ------------------------------------------------------------- */

// function updateViewHeaderTitle( idHeader , srcIcon , categoryTitle, subTitle ) {

    
//     // Set's 
//     idHeader.querySelector('#left-img-header-container > img').setAttribute( 'src' , srcIcon )
//     // idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'class' , classIcon )

//     idHeader.querySelector('#header-content-category-title').innerText = categoryTitle;

//     idHeader.querySelector('#header-content-category-description').innerText = subTitle;
    

// }







// console.log( 'MyPromise = ' + myPromise)



/* ------------------------------------------------------------- */
/* Create | Select Items of Select Chapters ( Custom Select )
/* ------------------------------------------------------------- */

function createChapterSelectItems ( categoryIndex ) {

    var radioChapters = [];
    var labelChapters = [];
    var imgLabelChapters = [];
    var divTitleLabelChapters = [];
    var divCountItemsChapters = [];



    console.log( '[createSelectItems] = ' + categoryIndex + " | " )

    // Info: Template must be exist (empty)

    /* --------------------------------- */
    /* Select Items 
    /* --------------------------------- */
    
    // Delete old Elements if its true 

    console.log("Label Elements = " +  selectListItemsContentChapter.querySelectorAll('.lbl-select-item-custom').length )
   
    if( selectListItemsContentChapter.querySelectorAll('.lbl-select-item-custom').length > 0 ) {

        var deleteElements = selectListItemsContentChapter.querySelectorAll('.lbl-select-item-custom').length;

        // Delete Old Elements 
        console.log("Delete Old Elements ")
        for( let i = 0; i < deleteElements; i++ ) {

            selectListItemsContentChapter.removeChild( selectListItemsContentChapter.querySelector('input') )
            selectListItemsContentChapter.removeChild( selectListItemsContentChapter.querySelector('label') )
        }
        

        // selectListItemsContentChapter.remove( selectListItemsContentChapter.querySelectorAll('input') )
        // selectListItemsContentChapter.remove( selectListItemsContentChapter.querySelectorAll('label') )
    }
    
   
    for( let i=0; i < arrayChaptersOfCategories[ categoryIndex ].length; i++ ) {

        /* -------------------------------------------------------------------------------- */
        /* Step 1 - Create Input
        /* -------------------------------------------------------------------------------- */

        radioChapters.push( document.createElement( 'input' ) )
        radioChapters[i].setAttribute( 'type' , 'radio')
        radioChapters[i].setAttribute( 'name' , 'radio-select-chapter-content')
        radioChapters[i].setAttribute( 'id' , getIdPrefixForChapterSelects( categoryIndex) + arrayChaptersOfCategories[ categoryIndex ][i][3] )

        // display none for layout view
        radioChapters[i].style.display = 'none'

        selectListItemsContentChapter.append( radioChapters[i] )

        /* -------------------------------------------------------------------------------- */
        /* Step 2 - Create Label
        /* -------------------------------------------------------------------------------- */

        labelChapters.push( document.createElement( 'label' ))
        labelChapters[i].setAttribute( 'for', getIdPrefixForChapterSelects( categoryIndex) + arrayChaptersOfCategories[ categoryIndex ][i][3])

        if( i == 0 ) {

            labelChapters[i].setAttribute( 'class', 'lbl-select-item-custom border-r-tl-0-3-tr-0-3em')

        } else {

            labelChapters[i].setAttribute( 'class', 'lbl-select-item-custom')
        }

        /* --------------------------- */
        // Add - Img 
        /* --------------------------- */

        imgLabelChapters.push( document.createElement( 'img' ) )
        imgLabelChapters[i].setAttribute( 'alt' , 'img')
        imgLabelChapters[i].setAttribute( 'src' , emojiPath + arrayChaptersOfCategories[ categoryIndex ][i][0] )
        imgLabelChapters[i].setAttribute( 'class' , arrayChaptersOfCategories[ categoryIndex ][i][1] )

        labelChapters[i].append( imgLabelChapters[i] )

        /* --------------------------- */
        // Add - Div Title
        /* --------------------------- */

        divTitleLabelChapters.push( document.createElement( 'div' ))
        divTitleLabelChapters[i].innerText = arrayChaptersOfCategories[ categoryIndex ][i][2]

        labelChapters[i].append( divTitleLabelChapters[i] )

        /* --------------------------- */
        // Add - Div Title
        /* --------------------------- */

        divCountItemsChapters.push( document.createElement( 'div' ))
        divCountItemsChapters[i].innerText = "( " + '00' + " )"

        labelChapters[i].append(  divCountItemsChapters[i] )

      
        // Add Complete Label to Page List 
        selectListItemsContentChapter.append( labelChapters[i] )
    
    }

    
    
}





function promiseCreateChapterSelectItems( categoryIndex , chapterIndex ) {

   
    return new Promise((resolve) => {

        resolve( createChapterSelectItems ( categoryIndex ) )

        console.log('### create end ### now we can use elements = ' + chapterIndex + " >> ")

        /* --------------------------------------------------- */
        // Create Dynamically Dom Elements
        /* --------------------------------------------------- */

        // radio
        var radioChapterConents = document.querySelectorAll('#js-custom-select-content-chapter input')
        // labels of select list 
        var lblChapterItems = document.querySelectorAll('#js-custom-select-content-chapter .lbl-select-item-custom')

        console.log('### create end ### now we can use elements = ' + chapterIndex + " >> " + lblChapterItems.length )

        // set radio chapter Index
        setRadioChecked( radioChapterConents , chapterIndex ) 

       
    })
}


// function createElements() {

//     var divElement = [];

//     for( let i=0; i < 3; i++ ) {
        
//         divElement.push( document.createElement('div') )
//         divElement[i].innerText = i + " div Element";
//         divElement[i].setAttribute( 'class' , 'divPromise' )

//         pageList.append( divElement[i] )
    
//     }
// }


// const myPromise = new Promise( function( resolve , reject ) {
       
//     resolve(  createElements() )
//     console.log('### Ende ### Create Elements')

//     const test = document.querySelector('.divPromise');

//     console.log(" Test Div = " + test )

//     test.innerText = "Du Muschie"
   
//     // no case to define
//     // reject()
// } )
