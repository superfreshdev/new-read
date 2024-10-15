console.log( '### header-main.js' )


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
    'nach Superfresh Art',
    'von mir spielen',
    'von mir entwickelte',
    'von mir erstellte',
    'mehr erfahren'
]

/* -------------------------------------------------- */
/* Main | Chapter Items of Categories
/* -------------------------------------------------- */

const emojiPath = "media/img/icons/02-emojies/";
const flagPath = "media/img/icons/03-flags/";

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
        ["flag-vietnam.png", "img-icon-big", "Vienamesisch","vietnam"],   

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
        ["emojie-entspannend.png", "img-icon-big", "Meditation","meditation"],
        ["gb-flag.png", "img-icon-big", "Englisch","english"],
        ["spain-flag.png", "img-icon-big", "Spanisch","spanish"],
        ["italian-flag.png", "img-icon-big", "Italenisch","italian"],
        ["france-flag.png", "img-icon-big", "Französisch","france"],
        ["greece-flag.png", "img-icon-big", "Griechisch","greece"],
        ["polska-flag.png", "img-icon-big", "Polnisch","polish"],
        ["turkey-flag.png", "img-icon-big", "Türkisch","turkish"],
        ["russia-flag.png", "img-icon-big", "Russisch","russian"],
        ["japan-flag.png", "img-icon-big", "Japanisch","japan"],
        ["flag-vietnam.png", "img-icon-big", "Vienamesisch","vietnam"],   

    ],

    [

        ["emojie-nase-dampfend.png", "img-icon-big", "Theorie","theory"],
        ["emoji-cool-sunglaesses.png", "img-icon-big", "Praxis","practice"]

    ] ,

    [

        ["me-zwinker.png", "img-icon-big", "60 Min. Training","theory"],
        ["me-zwinker.png", "img-icon-big", "120 Min. Training","theory"],
        ["me-zwinker.png", "img-icon-big", "Rückenübungen","theory"],
        ["me-zwinker.png", "img-icon-big", "Venentraining","practice"],
        ["me-zwinker.png", "img-icon-big", "Kraftraining","theory"],
    
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
        ["me-zwinker.png", "img-icon-big", "Meine Skills","theory"],
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

var newChapterIndex = [];

// selected item 
const selectedItemContentChapter = document.getElementById('js-selected-item-content-chapter')
const imgArrowSelectedItemContentChapter = document.getElementById('js-img-arrow-selected-item-content-chapter');
// select list 
const selectListItemsContentChapter = document.getElementById('js-select-list-content-chapter');



/* ----------------------------------------------------------------------------------------------------- */
/*
/* Bundle | Set Content by given index category binded by index chapter
/*
/* ----------------------------------------------------------------------------------------------------- */

/* ---------------------------------------------------------------------- */
/* Update | Header Title
/* ---------------------------------------------------------------------- */

function updateHeaderContent( idHeader , indexCategory ) {

    // Set Icon - Header
    idHeader.querySelector('#left-img-header-container > img').setAttribute( 'src' , lblCategoryItems[ indexCategory ].querySelector('img').getAttribute('src') )
    // Set Title - Header 
    idHeader.querySelector('#header-content-category-title').innerText = lblCategoryItems[ indexCategory ].querySelector('div:nth-of-type(1)').innerText;
    // Set Sub Title - Header 
    idHeader.querySelector('#header-content-category-description').innerText = categorySubTitles[ indexCategory ];
}


/* ---------------------------------------------------------------------- */
/* Set | Content 
/* ---------------------------------------------------------------------- */

function setContent( indexCategory , indexChapter ) {

    /* ----------------------------------------------------------------------------------- */
    /* Step 1 - Update Header Title 
    /* ---------------------------------------------------------------------------------- */
    
    updateHeaderContent( headerTitleContainer , indexCategory )

    /* ----------------------------------------------------------------------------------- */
    /* Step 2 - Create Chapter Select Items & Define Logic after creating
    /* ----------------------------------------------------------------------------------- */

    promiseCreateChapterSelectItems( indexCategory , indexChapter )

}







/* ----------------------------------------------------------------------------------------------------- */
/*
/* Bundle | Create Dynamically Chapter Items 
/*
/* ----------------------------------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------------------------------- */
/* Add Click (5/5) | Selected Item ( Custom Select )
/* ----------------------------------------------------------------------------------------------------- */

function addClickListenersToChapterItems( lblChapterItems ) {

    for( let i=0; i < lblChapterItems.length; i++ ) {

        lblChapterItems[i].addEventListener( 'click' , ()=> {

            
            /* --------------------------------------------- */
            /* Step 0 - Set new selected item 
            /* --------------------------------------------- */

            newChapterIndex[ newCatgegoryIndex ] = i;
            setRadioChecked( document.querySelectorAll('#js-custom-select-content-chapter input') , i ) 


            /* --------------------------------------------- */
            /* Step 1 - Update View selected item 
            /* --------------------------------------------- */

            updateSelectedItemView( lblChapterItems[i] , selectedItemContentChapter )

            /* --------------------------------------------- */
            /* Step 2 - Close Select List & Img Arrow
            /* --------------------------------------------- */

            selectListItemsContentChapter.classList.toggle('hide');
            imgArrowSelectedItemContentChapter.classList.toggle('img-arrow-open');            
            
        
        } )
    }
}

/* ----------------------------------------------------------------------------------------------------- */
/* Update (4/5) | Selected Item View ( Custom Select )
/* ----------------------------------------------------------------------------------------------------- */

function updateSelectedItemView( lblChapterItem , idSelected ) {

    // console.log(' updateSelectedItem #### ')

    // get Data from chapter Index

    var srcIcon = lblChapterItem.querySelector('img:nth-of-type(1)').getAttribute( 'src' ) ;
    var classIcon = lblChapterItem.querySelector('img:nth-of-type(1)').getAttribute( 'class' )
    var txtTitle = lblChapterItem.querySelector('div:nth-of-type(1)').innerText ;
    var countChapterItems = 0;

    // Set Data from chapter Index to Selected Item Div
    idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'src' , srcIcon )
    idSelected.querySelector('.title-select-item-custom > img').setAttribute( 'class' , classIcon )

    idSelected.querySelector('.title-select-item-custom > div:nth-of-type(1)').innerText = txtTitle + " " + "( " + countChapterItems + " )";

}

/* -------------------------------------------------------------- */
/* Get (3.2/5)  | Präfix for Chapter Selects ( for id radio inputs )
/* -------------------------------------------------------------- */

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

/* ----------------------------------------------------------------------------------------------------- */
/* Create (3.1/5) | Select Items of Select Chapters ( Custom Select )
/* ----------------------------------------------------------------------------------------------------- */

function createChapterSelectItems ( categoryIndex ) {

    // Info: Template must be exist (empty)

    var radioChapters = [];
    var labelChapters = [];
    var imgLabelChapters = [];
    var divTitleLabelChapters = [];
    var divCountItemsChapters = [];

    /* --------------------------------------------------------------------- */
    /* Step 0 - Delete old Chapter Items ( if some exists ) 
    /* --------------------------------------------------------------------- */

    deleteOldChapterItems( selectListItemsContentChapter , '.lbl-select-item-custom' )
   

    /* --------------------------------------------------------------------- */
    /* Step 1 - Create Chapter Select Items ( by array )
    /* --------------------------------------------------------------------- */
   
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
        divCountItemsChapters[i].innerText = "( " + '0' + " )"

        labelChapters[i].append(  divCountItemsChapters[i] )

      
        // Add Complete Label to Page List 
        selectListItemsContentChapter.append( labelChapters[i] )
    
    }

    
    
}

/* ------------------------------------------------------------------------------------------------------- */
/* Delete (2/5) | old Chapter Select Items  
/* ------------------------------------------------------------------------------------------------------- */

function deleteOldChapterItems( chapterList , cssChapterItem ) {

    var chapterItems = chapterList.querySelectorAll( cssChapterItem )

    if( chapterItems.length > 0 ) {

        // console.log('### deleteOldChapterItems -> Process')

        for( let i = 0; i < chapterItems.length; i++ ) {

            chapterList.removeChild( chapterList.querySelector('input') )
            chapterList.removeChild( chapterList.querySelector('label') )
        }
    }
}

/* ----------------------------------------------------------------------------------------------------- */
/* Promise (1/5) | Wait for Create Selected Items & add more features ( Custom Select )
/* ----------------------------------------------------------------------------------------------------- */

function promiseCreateChapterSelectItems( categoryIndex , chapterIndex ) {

   
    return new Promise((resolve) => {

        resolve( createChapterSelectItems ( categoryIndex ) )

    
        /* --------------------------------------------------- */
        // Create Dynamically Dom Elements
        /* --------------------------------------------------- */

        // radio
        var radioChapterConents = document.querySelectorAll('#js-custom-select-content-chapter input')
        // labels of select list 
        var lblChapterItems = document.querySelectorAll('#js-custom-select-content-chapter .lbl-select-item-custom')

        // set radio chapter Index
        setRadioChecked( radioChapterConents , chapterIndex ) 

        // var choseLabel = document.querySelectorAll('#js-custom-select-content-chapter .lbl-select-item-custom')[]
        updateSelectedItemView( lblChapterItems[ chapterIndex ] , selectedItemContentChapter )

        // Add Click Listeners on all generates Labels ( react only by clicking )
        addClickListenersToChapterItems( lblChapterItems )

       
    })
}










/*

1. Update - Selected Item - Chapter Select 

2. Merken von gesetzten Chapter Selects aus unterschiedlichen Category ( array  , push , default array[0] = 0, klick 2 , array[0] = 2 )

3. Chapter Select Item Click , schließen & Content anzeigen 

4. Chapter Count Items ( 0 )

    - /json/books/ actually/actually-overview-list.json | /book-playlists/cafe-am-rande-der-welt.json   | personality | biographie | thriller | fantasy | english | others 
    - /json/food/ top-every-dishes.json | top-vegan.json 
    - /json/language
    - /json/intelligence
    - /json/knowledge 
    - /json/music
    - /json/violine
    - /json/js-games
    - /json/s-projects
    - /json/tech-tutorials
    - /json/about -> direkte View kein Swipe rechts/links

*/